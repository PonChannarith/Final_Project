import React from 'react'

const BlogCard = ()=>  {
  return (
    <>
    <div className="  max-w-screen-xl mx-auto p-5  sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 ">
        <div className=" radies shadow-xl  bg-white  lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <img src="src/assets/Blog.png" className="w-full mb-3" />
          <div className="p-4 pt-2">
            <div className="mb-8">
              <p className="text-gray-700 text-sm font-suwannphum">
                របៀបបង្កើតថ្នាក់នៅក្នុងសាលា-(studio.stem)របៀបបង្កើតថ្នាក់នៅក្នុងសាលា
              </p>
            </div>
            <div className="flex items-center">
              <a href="#">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src="https://weteka.org/_next/image?url=https%3A%2F%2Fapi.weteka.org%2Fpublic%2Forgs%2F63fc7c5751508ff62e6ce857%2Fimages%2F287ea2c8-265d-4c3f-926b-8bb1c53701bd.png&w=64&q=75"
                  alt="Avatar of Jonathan Reinink"
                />
              </a>
              <div className="text-sm">
                <a
                  href="#"
                  className="text-gray-900 font-semibold leading-none hover:text-indigo-600 font-suwannphum"
                >
                  សាលាឌីជីថល
                </a>
                <p className="text-gray-600 font-suwannphum">
                  អ្នកតាមដាន: 664 នាក់
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
export default BlogCard;
