import React from 'react'
import { Link } from 'react-router-dom'
import './TopBar.css'

function TopBar() {
    
const user=true;

  return (
    <div className='top'>
        <div className='topLeft'>
          <Link to='https://www.facebook.com'><i className="topIcon fa-brands fa-square-facebook"></i>
            </Link>
            <Link to='https://www.twitter.com'><i className="topIcon fa-brands fa-square-twitter"></i>
           </Link>
            <Link to='https://www.linkedin.com'><i className="topIcon fa-brands fa-linkedin"></i>
            
            </Link>
            <Link to='https://www.instagram.com'> <i className="topIcon fa-brands fa-square-instagram"></i>
           </Link>
            <Link to='https://www.printerest.com'><i className="topIcon fa-brands fa-square-pinterest"></i>
        </Link>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li className='topListItem'>
                    <Link to='/' className='link'>About</Link>
                </li>
                <li className='topListItem'>
                    <Link to='/' className='link'>Contact</Link>
                </li>
                <li className='topListItem'>
                    <Link to='/write' className='link'>Write</Link>
                </li>
            
                <li className='topListItem'>
      <Link to='/' className='link'>

                    {user && "Logout"}</Link></li>
            </ul>
        </div>
        <div className='topRight'>
            {user ? ( <img alt='' src='https://picsum.photos/200/300' className='topImg'/>):(
                  <ul className='topList'>
                <li className='topListItem'>
                      
                  <Link to='/write' className='link'>Login</Link>
                  </li>
                <li className='topListItem'>

                    <Link to='/register' className='link'>Register</Link>
                    </li>
                    </ul>



            )}
           
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        

    </div>
  )
}

export default TopBar