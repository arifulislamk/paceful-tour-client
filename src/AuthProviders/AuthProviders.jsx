import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProviders = ({ children }) => {
    const [users, setUsers] = useState(null);
    const googleProvider = new GoogleAuthProvider() ;
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
    const providerInfo = {
        users,
        createUser,
        loginUser,
        googleSignin

    }
    return (
        <AuthContext.Provider value={providerInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;