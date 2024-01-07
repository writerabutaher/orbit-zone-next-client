import AddProductForm from "@/components/Dashboard/AddProductForm";

const AddProductPage = () => {
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800 md:mb-6 lg:text-3xl">
            Add Your Vehicle
          </h2>
        </div>
        <AddProductForm />
      </div>
    </div>
  );
};

export default AddProductPage;
