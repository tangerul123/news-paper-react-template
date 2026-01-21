import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../fireBase/fireBase.config';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const provider = new GoogleAuthProvider;
    const googleLoginUser = () => {
        return signInWithPopup(auth, provider) 
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }
    const logOut = () => {
        return signOut(auth)

    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const userData = {
        user,
        setUser,
        createUser,
        logOut,
        loginUser,
        loading,
        setLoading,
        updateUser,
        googleLoginUser

    };
    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;