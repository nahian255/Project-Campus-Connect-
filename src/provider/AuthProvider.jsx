import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    const [collegeData, setCollegeData] = useState(null);


    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);

            // // get and set token
            // if(currentUser){
            //     axios.post('https://bistro-boss-server-fawn.vercel.app/jwt', {email: currentUser.email})
            //     .then(data =>{
            //         // console.log(data.data.token)
            //         localStorage.setItem('access-token', data.data.token)
            //         setLoading(false);
            //     })
            // }
            // else{
            //     localStorage.removeItem('access-token')
            // }


        });
        return () => {
            return unsubscribe();
        }
    }, []);

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const authInfo = { creatUser, loading, user, loginUser, logOut, collegeData, setCollegeData }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;