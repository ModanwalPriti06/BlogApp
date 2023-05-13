import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img src='https://picsum.photos/id/30/300/300' alt=''/>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Magnam corrupti nam officiis vero aspernatur, explicabo cupiditate
              quod molestiae excepturi quibusdam iste reiciendis nesciunt exerc
              itationem at odit ipsa voluptate repudiandae aperiam dolore, soluta
               consequatur beatae provident quam temporibus. Corporis, reiciendis quibusdam?

            </p>
        </div>
        <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Music</li>
          <li className='sidebarListItem'>Style</li>
          <li className='sidebarListItem'>Tech</li>
          <li className='sidebarListItem'>Cinema</li>
          <li className='sidebarListItem'>Sport</li>
        </ul>
        </div>
        <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        </div>

        </div>
    </div>
  )
}

export default Sidebar