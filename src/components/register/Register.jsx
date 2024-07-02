const Register = () => {
  return (
    <>
      <div className="h-[100vh] items-center flex justify-center lg:px-0 rounded-2xl">
        <div className="max-w-screen-xl border shadow sm:rounded-lg flex justify-center flex-1 rounded-2xl">
          <div className="flex-1 text-center hidden md:flex">
            <div className=" xl:m-16 w-full  bg-center rounded-2xl  ">
              <img src="src/assets/Login.gif" alt="login" />
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className=" flex flex-col items-center">
              <div className="text-center">
                <img
                  src="src/assets/Logo.png"
                  alt="STEM"
                  className="w-[100px] h-[70px] m-auto pb-5"
                />
                <h1 className=" font-suwannaphum text-2xl xl:text-4xl font-extrabold text-[#0A36A5]">
                  បង្កើតគណនី
                </h1>
              </div>
              <div className="w-full flex-1 mt-8">
                <div className=" max-w-xs flex flex-col gap-4">
                  <input
                    className="w-full font-suwannaphum  px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Enter your name"
                  />
                  <input
                    className="w-full font-suwannaphum  px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <input
                    className="w-full font-suwannaphum  px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <input
                    className="w-full font-suwannaphum  px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Confirm Password"
                  />
                  <button className="mt-5 tracking-wide font-semibold bg-[#4678f5] text-gray-100 w-full py-4 rounded-[50px] hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3 font-suwannaphum ">ចុះឈ្មោះ</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center​ font-suwannphum">
                    មានគណនីរួចហើយ?{" "}
                    <a href="">
                      <span className="text-blue-900 font-semibold font-suwannphum">
                        ចូលគណនី
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
