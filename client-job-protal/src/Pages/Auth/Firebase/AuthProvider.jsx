import React, { createContext, useEffect, useState } from 'react'
import auth from './firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null)


const provider = new GoogleAuthProvider();
function AuthProvider({children}) {
const [users , setUsers] =  useState([])
const [loading , setLoading] = useState(true)


// register new user
const registerNewUser = (email , password) => {
    setLoading(true)
return createUserWithEmailAndPassword(auth, email, password) 
}

// login or signin user 

const signInUser = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

// signout / logOut user 

const signOutUser = () => {
    return signOut(auth)
}

// signin with google 

const googleLoginUser = () => {
   return signInWithPopup(auth, provider)
}

// current user for onAuthStateChanged

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUsers(currentUser)
        console.log('current user -> ',currentUser)
        setLoading(false)
    })

    return () => {
        unSubscribe()
    }
} ,[])

    const userInfo = {
        registerNewUser,
        googleLoginUser,
        signInUser,
        users,
        loading,
        setUsers,
        setLoading,
        signOutUser,

    }
  return (
   <AuthContext.Provider value={userInfo}>
{children}
   </AuthContext.Provider>
  )
}

export default AuthProvider
