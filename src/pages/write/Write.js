import React from 'react'
import './Write.css'
import {Link} from 'react-router-dom'

function Write() {
  return (
    <div className='write'>
        <img src='https://picsum.photos/seed/picsum/1200/250' alt='' 
        className='writeImg'></img>
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label for="fileInput"><i className="writeIcon fa-solid fa-plus"></i></label>
                <input type="file" id="fileInput" style={{display:"none"}}></input>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}></input>

            </div>
            <div className='writeFormGroup'>
                <textarea placeholder="Tell your story......."
                type="text"
                className='writeInput writeText'></textarea>
            </div>
            <button className='writeSubmit'>
      <Link to='/posts' className='link'>Publish</Link>

            </button>

        </form>
    </div>
  )
}

export default Write