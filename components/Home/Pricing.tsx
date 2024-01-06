const Pricing = () => {
  return (
    <div className="px-6 m-auto my-32 xl:container md:px-12 lg:px-20">
      <div className="m-auto text-center lg:w-7/12">
        <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">
          Choose Your Subscription Plan
        </h2>
      </div>
      <div className="grid items-center gap-6 mt-12 md:grid-cols-2 lg:flex lg:space-x-8">
        <div className="group relative md:col-span-1 lg:w-[32%]">
          <div
            aria-hidden="true"
            className="absolute top-0 w-full h-full transition duration-500 bg-white border border-gray-100 shadow-2xl rounded-3xl shadow-gray-600/10 group-hover:scale-105 lg:group-hover:scale-110"
          ></div>
          <div className="relative p-8 space-y-8">
            <h3 className="text-3xl font-semibold text-center text-gray-700">
              Monthly
            </h3>
            <div className="relative flex justify-around">
              <div className="flex">
                <span className="mt-2 -ml-6 text-3xl font-bold">$</span>
                <span className="font-bold text-gray-800 leading-0 text-8xl">
                  19
                </span>
              </div>
            </div>
            <ul
              role="list"
              className="pb-6 m-auto space-y-4 text-gray-600 w-max"
            >
              <li className="space-x-2">
                <span>First premium advantage</span>
              </li>
              <li className="space-x-2">
                <span>Second premium advantage</span>
              </li>
              <li className="space-x-2">
                <span>Third advantage</span>
              </li>
            </ul>
            <button className="relative flex items-center justify-center w-full px-6 h-11 before:absolute before:inset-0 before:rounded-full before:bg-purple-50 before:border before:border-purple-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-purple-600">
                Start Plan
              </span>
            </button>
          </div>
        </div>

        <div className="group relative row-start-1 md:col-span-2 lg:w-[36%]">
          <div
            aria-hidden="true"
            className="absolute top-0 w-full h-full transition duration-500 bg-white border border-gray-100 shadow-2xl rounded-3xl shadow-gray-600/10 group-hover:scale-105 lg:group-hover:scale-110"
          ></div>
          <div className="relative p-8 space-y-8">
            <h3 className="text-3xl font-semibold text-center text-gray-700">
              Annual
            </h3>
            <div className="overflow-hidden">
              <div className="flex items-end justify-center -mr-20">
                <div className="flex">
                  <span className="mt-2 -ml-6 text-3xl font-bold">$</span>
                  <span className="font-bold text-gray-800 leading-0 text-8xl">
                    15
                  </span>
                </div>
                <div className="mb-2">
                  <span className="block text-xl font-bold text-gray-500">
                    .56
                  </span>
                  <span className="block text-xl font-bold">/ Month</span>
                </div>
              </div>
              <div className="text-2xl font-medium text-center">
                <span className="text-gray-400 line-through">$234</span>
                <span className="font-semibold text-gray-700">$190</span>
              </div>
              <span className="block text-xs text-center uppercase">
                BILLED YEARLY
              </span>
              <span className="block px-4 py-1 m-auto mt-4 text-sm font-medium text-yellow-900 rounded-full w-max bg-gradient-to-r from-yellow-300 to-pink-300">
                1 Discount applied
              </span>
            </div>
            <ul
              role="list"
              className="pb-6 m-auto space-y-4 text-gray-600 w-max"
            >
              <li className="space-x-2">
                <span>First premium advantage</span>
              </li>
              <li className="space-x-2">
                <span>Second premium advantage</span>
              </li>
              <li className="space-x-2">
                <span>Third advantage</span>
              </li>
              <li className="space-x-2">
                <span>Fourth organizations advantage</span>
              </li>
            </ul>
            <button className="relative flex items-center justify-center w-full px-6 h-11 before:absolute before:inset-0 before:rounded-full before:bg-purple-50 before:border before:border-purple-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-purple-600">
                Start Plan
              </span>
            </button>
          </div>
        </div>

        <div className="group relative md:col-span-1 lg:w-[32%]">
          <div
            aria-hidden="true"
            className="absolute top-0 w-full h-full transition duration-500 bg-white border border-gray-100 shadow-2xl rounded-3xl shadow-gray-600/10 group-hover:scale-105 lg:group-hover:scale-110"
          ></div>
          <div className="relative p-8 space-y-8">
            <h3 className="text-3xl font-semibold text-center text-gray-700">
              Free
            </h3>
            <div className="relative flex justify-around">
              <div className="flex">
                <span className="mt-2 -ml-2 text-3xl font-bold">$</span>
                <span className="font-bold text-gray-800 leading-0 text-8xl">
                  0
                </span>
              </div>
            </div>
            <ul
              role="list"
              className="pb-6 m-auto space-y-4 text-gray-600 w-max"
            >
              <li className="space-x-2">
                <span>First premium advantage</span>
              </li>
              <li className="space-x-2">
                <span>Second premium advantage</span>
              </li>
              <li className="space-x-2">
                <span>Third advantage</span>
              </li>
            </ul>
            <button className="relative flex items-center justify-center w-full px-6 h-11 before:absolute before:inset-0 before:rounded-full before:bg-purple-50 before:border before:border-purple-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-purple-600">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
