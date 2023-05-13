import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../post/Post'
import './Posts.css'


function Posts() {
  return (
    <div className='posts'>
      <Link to='/post/01' className='link'><Post/></Link>
      <Link to='/post/02' className='link'><Post/></Link>

      <Link to='/post/03' className='link'><Post/></Link>

      <Link to='/post/04' className='link'><Post/></Link>

      <Link to='/post/05' className='link'><Post/></Link>

      <Link to='/post/06' className='link'><Post/></Link>

    </div>
  )
}

export default Posts