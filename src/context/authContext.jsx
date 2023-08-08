import { onAuthStateChanged } from "firebase/auth";
import { createContext, useLayoutEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ childer }) => {
    const [currentUser, setCurrentUser] = useState({});

    useLayoutEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return () => {
            unsub();
        };
    }, []);

    return (
        <AuthContext.Provider value={currentUser}>
            {childer}
        </AuthContext.Provider>
    );
};