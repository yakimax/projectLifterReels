import React, { useContext, useState } from 'react'
import '../App.css'
import { AuthContext } from '../context/AuthContext'

function Profile() {
  let userObj = useContext(AuthContext);
  const [loader ,setLoader] = useState(false);
  return (
    <>
    {
    userObj.currUser == null ? <div>getting data </div>:
    <div>{userObj.currUser.uid}</div>
      /* <div className='header'></div>
        <div className="main">
          <div className="img_container">
            <img src = "https://picsum.photos/200" className='pimg' alt=""></img>
          </div>
          <div className="details">
            <div className="content">Name :{userObj.user.uid}</div>
            <div className="content">No of posts :</div>
            <div className="content">Mail me :</div>
          </div>
      </div> */}

    </>
  )
}

export default Profile