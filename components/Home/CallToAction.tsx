const CallToAction = () => {
  return (
    <section
      className="py-28"
      style={{
        background:
          "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
      }}
    >
      <div className="max-w-screen-xl px-4 mx-auto md:text-center md:px-8">
        <div className="max-w-xl space-y-3 md:mx-auto">
          <h3 className="font-semibold text-indigo-600">
            Professional services
          </h3>
          <p className="text-3xl font-semibold text-gray-800 sm:text-4xl">
            Build the future with us
          </p>
          <p className="text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
        <div className="mt-4">
          <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 font-medium text-white duration-150 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 active:bg-gray-900 hover:shadow-none"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
