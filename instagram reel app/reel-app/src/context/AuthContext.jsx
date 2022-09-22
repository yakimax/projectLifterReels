import {auth} from '../firebase';
import {onAuthStateChanged} from 'firebase/auth';
import React ,{Children, useEffect,useEffect} from 'react';


export function AuthContextProvider() {
    const [mainLoader,setMainLoader] = useState(true) ;
    const [currUser,setCurrUser] = useState('') ;

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
          if(user){
            setUser(user);
          }else{
            setUser(null);
          }
          setMainLoader(false);
        })
      },[])
  return (
    <AuthContext.Provider value={currUser}>
        {!mainLoader && children}
    </AuthContext.Provider>
  )
}

export const AuthContext = React.createContext();

