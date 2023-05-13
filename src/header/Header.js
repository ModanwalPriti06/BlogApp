import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src='https://picsum.photos/1360/300' alt=''/>
    </div>
  )
}

export default Header