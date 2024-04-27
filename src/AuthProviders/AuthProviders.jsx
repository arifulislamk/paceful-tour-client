import { createContext, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProviders = ({ children }) => {
    const [users, setUsers] = useState(null);
    const googleProvider = new GoogleAuthProvider() ;
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth(app);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignin = () => {
        return signInWithPopup(auth, googleProvider) ;
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider) ;
    }
    const providerInfo = {
        users,
        createUser,
        loginUser,
        googleSignin,
        githubLogin
    }

    return (
        <AuthContext.Provider value={providerInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;