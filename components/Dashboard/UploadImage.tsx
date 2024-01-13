import { storage } from "@/config/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

const UploadImage = ({
  setImage,
}: {
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setLoading(true);

      try {
        const name = selectedFile.name + new Date().getTime();
        const imageRef = ref(storage, `images/${name}`);
        const snapshot = await uploadBytes(imageRef, selectedFile);
        const downloadURL = await getDownloadURL(snapshot.ref);
        setImage(downloadURL);
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setLoading(false);
      }
    }
  };

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
        onChange={handleImage}
        type="file"
        id="image"
        accept="image/jpeg, image/png"
        className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
      />
    </div>
  );
};

export default UploadImage;
