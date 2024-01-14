import { storage } from "@/config/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const UploadImage = ({
  image,
  setImage,
  loading,
  setLoading,
}: {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
      <p className="py-1 text-center text-gray-600">or</p>
      <input
        onChange={(e) => setImage(e.target.value)}
        type="text"
        id="image"
        placeholder="Paste a image link"
        className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-purple-300 focus:ring"
      />
      {!image && (
        <p className="text-right text-error">*please provide a image</p>
      )}
    </div>
  );
};

export default UploadImage;
