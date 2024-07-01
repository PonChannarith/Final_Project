import React from 'react'
export default function Login()  {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-md shadow-2xl rounded-lg">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md mb-5">
              <img
                src="src/assets/LOGO-removebg-preview.png"
                alt="Stem"
                className="w-[100px] h-[100px] m-auto"
              />
              <h2 className="mt-4 text-center text-[32px] text-blue-700 font-suwannphum font-bold text-gray-900​ ​">
                ចូលគណនី
              </h2>
            </div>
            <form className="space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className=" font-suwannphum text-sm font-medium text-gray-700 "
                >
                  អុីម៉ែលអ្នកប្រើ
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    className="font-suwannphum appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                  />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  className=" font-suwannphum block text-sm font-medium text-gray-700"
                >
                  លេខកូដ
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    className=" font-suwannphum appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="បញ្ចូលលេខកូដរបស់អ្នក"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h4 className="ml-2 block text-sm​​ font-bold   text-gray-900 suwannaphum">
                    បង្កើតគណនី
                  </h4>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600​ suwannaphum hover:text-blue-500"
                  >
                    ភ្លេចពាក្យសម្ងាត់?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium​ font-suwannphum rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  ចូលគណនី
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className=" font-suwannphum px-2 bg-gray-100 text-gray-500">
                    ឬ​ បង្កើតគណនីជាមួយ
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <img
                      className="h-6 w-6"
                      src="src/assets/facebook.png"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <img
                      className="h-6 w-6"
                      src="src/assets/instagram.png"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <img
                      className="h-6 w-6"
                      src="src/assets/google.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
