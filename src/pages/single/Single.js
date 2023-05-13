import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import SinglePost from '../../singlePost/SinglePost'
import './Single.css'

function Single() {
  return (
    <div className='single'>
      {/*Post */}
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}

export default Single