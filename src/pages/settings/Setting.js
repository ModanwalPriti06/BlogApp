import React from 'react'
import './Setting.css'
import Sidebar from '../../sidebar/Sidebar'
import {Link} from 'react-router-dom'
function Setting() {
  return (
    <div className='setting'>
       <div className='settingWrapper'>
           <div className='settingTitle'>
               <span className='settingUpdateTitle'>Update Your Account</span>
               <span className='settingDeleteTitle'>Delete Account</span>
           </div>
           <form className='settingForm'>
               <label>Profile Picture</label>
               <div className='settingPP'>
                   <img src='https://picsum.photos/130/300' alt=''></img>
                   <label htmlFor='fileInput'>
                   <i className="settingPPIcon fa-regular fa-circle-user"></i>
                   </label>
                   <input type='file' id='fileInput' style={{display:"none"}}/>
               </div>
               <label>Username</label>
               <input type="text" placeholder='Priti'></input>
               <label>Email</label>
               <input type="email" placeholder='pritivns612@gmail.com'></input>
               <label>Password</label>
               <input type="password"></input>
               <button className='settingSubmit'>
          <Link to='/posts' className='link'>Update</Link>
               
               </button>
           </form>

       </div>
       <Sidebar/>
     
    </div>
  )
}

export default Setting