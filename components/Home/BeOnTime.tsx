const BeOnTime = () => {
  return (
    <div className="container mx-auto bg-gray-100 ms-auto rounded-2xl">
      <div className="relative flex max-w-screen-xl px-6 py-16 mx-auto">
        <div className="relative flex flex-col sm:w-2/3 lg:w-2/5">
          <span className="w-20 h-1 mb-10 bg-gray-800"></span>
          <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase sm:text-8xl">
            Be on
            <span className="text-5xl sm:text-7xl">Time</span>
          </h1>
          <p className="text-sm text-gray-700 sm:text-base">
            Dimension of reality that makes change possible and understandable.
            An indefinite and homogeneous environment in which natural events
            and human existence take place.
          </p>
          <div className="flex mt-8">
            <a
              href="#"
              className="px-4 py-2 mr-4 text-white uppercase bg-gray-800 border-2 border-transparent rounded-lg text-md hover:bg-gray-800"
            >
              Get started
            </a>
            <a
              href="#"
              className="px-4 py-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white text-md"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
          <img
            src="https://images.pexels.com/photos/1338396/pexels-photo-1338396.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-5/6 m-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BeOnTime;
