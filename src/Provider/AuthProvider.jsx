import React, { createContext, useEffect, useState } from 'react';
export const AuthContext=createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firevase/Firebase.config';
const auth = getAuth(app);
const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null);

    console.log(user)
   const createUSer=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
   }
   const singIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }
    
   
   const logOut=()=>{
    return signOut(auth)
   }
    useEffect(()=>{
    const unsubcribe=    onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return()=>{
            unsubcribe();
        }
    },[])

   const authData={
    user,
    setUser,
    createUSer,
    logOut,
    singIn
   };
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;