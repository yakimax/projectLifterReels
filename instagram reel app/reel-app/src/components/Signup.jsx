import { React , useEffect, useState } from 'react' ;
import {auth,db} from '../firebase';
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { setDoc,doc } from 'firebase/firestore';


function Signup() {
  const [email,setEmail] = useState('') ;
  const [pass,setPass] = useState('') ;
  const [err,setError] = useState('') ;
  const [name,setName] = useState('');

  const [loader,setLoader] = useState(false) ;
  const [user,setUser] = useState(null) ;

  let trackname = (e)=>{
    setName(e.target.value);
  }
  let trackmail = (e)=>{
  setEmail(e.target.value) ;
}
let trackpass = (e)=>{
  setPass(e.target.value) ;
}
let displayDetails = async ()=>{
  try{
    setLoader(true) ;
    let usersignUp = await createUserWithEmailAndPassword(auth,email,pass) ;
    // console.log(usersignUp);
    setUser(usersignUp.user);
    const docRef = await setDoc(doc(db, "users",usersignUp.user.uid), {
      name,
      email,
      pass,
      reelsIds:[],
      userId : usersignUp.user.uid,
      profileImage : ""
    });
  
  }catch(err){
    setError(err.message) ;
    setTimeout(()=>{
      setError("") ;
  },2000)
  }
  setLoader(false) ;  
}



useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    if(user){
      setUser(user);
    }else{
      setUser(null);
    }
  })
},[])

  return (
    <>
    {
      err !== "" ? <h1>Error is{err}</h1> 
      : loader === true ? <h1>...Loading</h1>
      : user !== null ?<><h1> Signed up User is @{user.uid}</h1></> 
      : <>
        <input type = "text" value = {email} placeholder = 'email' onChange={trackmail}></input>
        <br></br>
        <input type = "text" value = {pass} placeholder = 'password' onChange={trackpass}></input>
        <br></br>
        <input type = "text" value = {name} placeholder = 'name' onChange={trackname}></input>
        <br></br>
        <button type = "click" onClick={displayDetails}>Sign Up</button>
      </>
    }
    </>
  )
}

export default Signup