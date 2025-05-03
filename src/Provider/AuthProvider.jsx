import React, { createContext, useEffect, useState } from 'react';
export const AuthContext=createContext();
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged,  sendPasswordResetEmail,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firevase/Firebase.config';
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    // console.log(loading ,user)
   const createUSer=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
   }
   const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
   const singIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
   }
    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }
   
   const logOut=()=>{
    return signOut(auth)
   }
   const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
    useEffect(()=>{
    const unsubcribe=    onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
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
    singIn,
    setLoading,
    loading,
    updateUser,
    forgetPassword,
    googleSignIn
   };
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;