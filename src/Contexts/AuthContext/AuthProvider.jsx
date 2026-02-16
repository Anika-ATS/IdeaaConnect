import React , { createContext, useEffect, useState } from 'react';

//  GoogleAuthProvider,  , signInWithPopup, , updateProfile
import { createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
           onAuthStateChanged,
           signOut,
        } from 'firebase/auth';
// 
import { AuthContext } from './AuthContext';

import { auth } from '../../firebase/firebase.init';


// export const AuthContext = createContext();

const AuthProvider = (    {children}) => {
    

        const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

       const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


      // observe user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser)
        })
        return () => {
            unSubscribe();
        }
        }, [])





    const authInfo = {
        user,
        createUser,
        loading,
        signInUser,
        logOut
       
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
        
    )
};

export default AuthProvider;
