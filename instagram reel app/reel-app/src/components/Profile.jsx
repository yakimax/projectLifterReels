import {getDoc,doc } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import '../App.css'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'

function Profile() {
  let userObj = useContext(AuthContext);
  const [user,setUser] = useState();
  const [loader ,setLoader] = useState(true);
  
  useEffect(()=>{
    (async function(){
      const docRef = doc(db, "users",userObj.currUser.uid);
      const docSnap = await getDoc(docRef);
      setUser(docSnap.data());
      setLoader(false);
    })()
  },[]);
  return (
    <>
    { loader ? <div> getting data </div> :
    <>
        <div className="profile">Profile</div>
        <div className='header'></div>
            <div className="main">
              <div className="img_container">
              <img src = "https://picsum.photos/200" className='pimg' alt=""></img>
            </div>
            <div className="details">
              <div className="content">Name :{user.name}</div>
              <div className="content">No of posts :{user.reelsIds.length}</div>
              <div className="content">Mail me :{user.email}</div>
            </div>
      </div> 
    </>
    }
    </>
  )
}

export default Profile