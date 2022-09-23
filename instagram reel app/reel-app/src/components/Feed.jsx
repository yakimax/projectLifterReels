import React from 'react'
import '../App.css';

function Feed() {
  return (
    <>
    <div className='feed_header'>
      <img className='Appicon' src ='	https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' alt = 'AppIcon'/>
      <img className='profile_img' src = "https://image.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg" alt = 'ProfileImg'/>
    </div>
    <div className='main_container'>
      <div className='upload_container'><i class="fa-solid fa-clapperboard"></i></div>
      <div className='reels_container'></div>
    </div>
    </>
  )
}

export default Feed