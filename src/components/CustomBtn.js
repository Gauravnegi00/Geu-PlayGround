import React from 'react'
import './style.css'
function CustomBtn({text , onClick}) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[20px] focus:outline-none focus:shadow-outline"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default CustomBtn;
