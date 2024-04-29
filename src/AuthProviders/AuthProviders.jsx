import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProviders = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth(app);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth) ;
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser)
            setLoading(false)
            console.log("inside useeffect ", currentUser)
        })
        return () => {
            unSubscribe()
        }

    }, [])

    const providerInfo = {
        users,
        createUser,
        loginUser,
        googleSignin,
        githubLogin,
        logOut,
        loading
    }


    return (
        <AuthContext.Provider value={providerInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;