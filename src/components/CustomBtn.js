import React from 'react'
import './style.css'
function CustomBtn({text , onClick}) {
  return (
    <button className="custom_btn"  onClick={onClick}>
      {text}
    </button>
  )
}

export default CustomBtn;
