import React from 'react'
import codingImg from './Assests/codingImg3.png'
import Card from './Card'
function CodingPage() {
  return (
    <div className='centerDiv width   height flex justify-center rounded-xl '>
        <div className="w-[50%] h-[100%] px-8 pt-6 pb-8 flex flex-col gap-14 ">
            <h2 className="text-center text-[30px] font-bold text-blue-text mt-10">Choose a Programming Language</h2>
            {/* Form */}
            <form>
            <div className="">
            <label className="block text-gray-700 text-[25px] font-bold mb-2" htmlFor="language">
                Select the language in which you want to learn coding:
            </label>
            <div className="flex items-center mb-4 ">
                <input className="mr-2 leading-tight" type="radio" id="cpp" name="language" value="C++" />
                <label className="text-gray-700 text-2xl cursor-pointer" htmlFor="cpp">
                C++
                </label>
            </div>
            <div className="flex items-center ">
                <input className="mr-2 leading-tight " type="radio" id="java" name="language" value="Java" />
                <label className="text-gray-700 text-2xl cursor-pointer" htmlFor="java">
                Java
                </label>
            </div>
            </div>
            <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
            </button>
            </div>
            </form>
            {/* Card */}
            <div className='flex   '>
                <Card data="C++"/>
                <Card data="Java"/>
            </div>
        </div>

        {/* Image */}
        <div className="w-1/2 h-full flex  justify-center items-center ">
            <img src={codingImg} alt="img" loading='lazy' className="w-[600px] " />
        </div>


    </div>
  )
}

export default CodingPage
