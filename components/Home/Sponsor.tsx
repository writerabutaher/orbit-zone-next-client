const Sponsor = () => {
  const images = [
    "https://www.carlogos.org/car-logos/tesla-logo.png",
    "https://www.carlogos.org/car-logos/bmw-logo.png",
    "https://www.carlogos.org/car-logos/honda-logo.png",
    "https://www.carlogos.org/car-logos/nissan-logo.png",
    "https://www.carlogos.org/car-logos/hyundai-logo.png",
    "https://www.carlogos.org/car-logos/toyota-logo.png",
  ];

  return (
    <div className="relative flex flex-col items-center py-16 my-20 overflow-hidden bg-gray-100 md:py-20 ">
      <div className="container relative z-[1] m-auto px-6 md:px-12">
        <div className="m-auto text-center md:w-8/12 lg:w-6/12">
          <h1 className="my-8 text-3xl font-semibold text-center lg:text-4xl">
            Favorite Companies Our Partners.
          </h1>
        </div>
        <div className="m-auto mt-16 md:w-11/12">
          <div className="flex flex-wrap justify-center gap-6">
            {images.map((src, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-white border border-gray-200 group rounded-xl bg-opacity-5 hover:bg-opacity-10"
              >
                <img
                  src={src}
                  className="w-32 transition contrast-0 group-hover:contrast-100"
                  loading="lazy"
                  alt="logo airbnb"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
