import {auth} from '../firebase';
import {onAuthStateChanged} from 'firebase/auth';
import React ,{useEffect,useState} from 'react';
export const AuthContext = React.createContext();


export function AuthContextProvider({children}) {
    const [mainLoader,setMainLoader] = useState(true) ;
    const [currUser,setCurrUser] = useState('') ;

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
          if(user){
            setCurrUser(user);
          }else{
            setCurrUser(null);
          }
          setMainLoader(false);
        })
      },[])
      let value  = { currUser }
  return (
    <AuthContext.Provider value={value}>
        {!mainLoader && children}
    </AuthContext.Provider>
  )
}


