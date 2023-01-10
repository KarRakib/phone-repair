import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

function UserContext({ children }) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const userRegister = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const userLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const userLogOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    }
  }, [])
  const userUpdateProfile = (profile)=>{
    return updateProfile(auth.currentUser, profile)
  }
  const googleProvider = new GoogleAuthProvider()
  const googleSignUp = () =>{
  return signInWithPopup(auth, googleProvider)
  }


  const authInfo = { user, loading, userRegister, userLogin, userLogOut,googleSignUp,userUpdateProfile }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>

  )
}

export default UserContext