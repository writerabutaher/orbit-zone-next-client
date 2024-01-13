import { storage } from "@/config/firebaseConfig";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";

const UploadImage = ({
  setImageUrl,
}: {
  setImageUrl: React.Dispatch<React.SetStateAction<string[] | []>>;
}) => {
  const [loading, setLoading] = useState(true);

  function generateRandomUid() {
    const uid = Math.floor(Math.random() * 9000000000) + 1000000000;
    return uid.toString();
  }

  const imagesListRef = ref(storage, "images/");

  const uploadFiles = async (files: string[]) => {
    setLoading(true);

    try {
      const uploadPromises = files.map(async (file: any) => {
        const imageRef = ref(
          storage,
          `images/${file.name + generateRandomUid()}`
        );
        const snapshot = await uploadBytes(imageRef, file);
        return getDownloadURL(snapshot.ref);
      });

      const urls = await Promise.all(uploadPromises);
      setImageUrl((prev) => [...prev, ...urls]);
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event: any) => {
    const files = event.target.files;
    uploadFiles(Array.from(files));
  };

  useEffect(() => {
    listAll(imagesListRef)
      .then((response) =>
        Promise.all(response.items.map((item) => getDownloadURL(item)))
      )
      .then((urls) => {
        setLoading(false);
        setImageUrl(urls);
      })
      .catch((error) => {
        console.error("Error fetching image URLs:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <label
        htmlFor="image"
        className="flex justify-between w-full mb-2 text-sm text-gray-800 sm:text-base"
      >
        <span>Upload Image*</span>
        <span>{loading && "Uploading..."}</span>
      </label>
      <input
        onChange={handleFileChange}
        type="file"
        id="photo"
        accept="photo/*"
        className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
      />
    </div>
  );
};

export default UploadImage;
