import {getDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import '../App.css'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'

function Profile() {
  let userObj = useContext(AuthContext);
  const [user,setUser] = useState();
  const [loader ,setLoader] = useState(false);
  
  useEffect(()=>{
    (async function(){
      var docRef = db.collection("users").doc(userObj.uid);
      let userObject = await getDoc(docRef);
      setUser(userObject.data());
      setLoader(false);
    })()
})
  return (
    <>
    {
    userObj.currUser == null ? <div>getting data </div>:
    <>
      <div>{userObj.currUser.uid}</div>
        <div className='header'></div>
            <div className="main">
              <div className="img_container">
              <img src = "https://picsum.photos/200" className='pimg' alt=""></img>
            </div>
            <div className="details">
              <div className="content">Name :{userObj.user.uid}</div>
              <div className="content">No of posts :</div>
              <div className="content">Mail me :</div>
            </div>
      </div> 
    </>
    }
    </>
  )
}

export default Profile