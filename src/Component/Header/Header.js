import React from 'react'
import './Header.css'
import { CiBellOn } from "react-icons/ci";
import { BsBrightnessHigh } from "react-icons/bs";

function Header() {
  return (
    <div className='header'>
        <div className="admin-profile">
            <img src="images/Daniel.jpg" alt="Admin Profile" />
            <div>
                <h1>دانیال کفائی نژاد طهرانی</h1>
                <h3>برنامه نویس فرانت اند</h3>
            </div>
        </div>

      <div className="header-left-section">
        <div className="search-box">
            <input type="text" placeholder='جست و جو بکنید...' />
            <button>جست و جو</button>
        </div>

        <button className="header-left-icons"><CiBellOn /></button>
        <button className="header-left-icons"><BsBrightnessHigh /></button>
      </div>

    </div>
  )
}

export default Header