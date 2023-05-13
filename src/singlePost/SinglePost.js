import React from 'react'
import './SinglePost.css'
import {Link} from 'react-router-dom'

function SinglePost() {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            <img src='https://picsum.photos/seed/picsum/1000/300' alt='' className='singlePostImage'></img>
            <h1 className='singlePostTitle'>Lorem isump wur kaunbreu 
            <div className='singlePostEdit'>
                <Link to="/settings" className="link"><i className="singlePostIcon fa-solid fa-pen-to-square"></i></Link>
                 <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
            </h1>
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>Author: <b>Priti</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eligendi eaque aut sapiente, illum expedita velit quos debitis,
              dolore quae maiores excepturi. Fugit doloribus voluptas aliquid 
              consequuntur sint, vero pariatur error!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eligendi eaque aut sapiente, illum expedita velit quos debitis,
              dolore quae maiores excepturi. Fugit doloribus voluptas aliquid 
              consequuntur sint, vero pariatur error!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eligendi eaque aut sapiente, illum expedita velit quos debitis,
              dolore quae maiores excepturi. Fugit doloribus voluptas aliquid 
              consequuntur sint, vero pariatur error!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eligendi eaque aut sapiente, illum expedita velit quos debitis,
              dolore quae maiores excepturi. Fugit doloribus voluptas aliquid 
              consequuntur sint, vero pariatur error!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eligendi eaque aut sapiente, illum expedita velit quos debitis,
              dolore quae maiores excepturi. Fugit doloribus voluptas aliquid 
              consequuntur sint, vero pariatur error!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eligendi eaque aut sapiente, illum expedita velit quos debitis,
              dolore quae maiores excepturi. Fugit doloribus voluptas aliquid 
              consequuntur sint, vero pariatur error!

            </p>
        </div>
    </div>
  )
}

export default SinglePost