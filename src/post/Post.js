import React from 'react'
import './Post.css'

function Post() {
  return (
    <div className='post'>
        <img src='https://picsum.photos/1360/300' alt='' className='postImg'/>
        <div className='postInfo'>
          <div className='postCats'>
            <span className='postCat'>Music</span>
            <span className='postCat'>Life</span>

          </div>
          <span className='postTitle'>Lrem isum at carieo htied</span>
          <hr/>
          <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>
          hello my Name is priti modanwal. I want to become Software Developer. 
          Now I HAve Cpleted Full Stack Web Developer
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Et labore cupiditate reprehenderit non explicabo ab quisquam mollitia!
            Exercitationem, labore ducimus voluptatem, obcaecati tenetur nemo error
             maiores illum repellendus delectus expedita!
.
        </p>
    </div>
  )
}

export default Post