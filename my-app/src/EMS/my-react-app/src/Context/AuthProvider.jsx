import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utilites/LocalStorage';


export const DataContext = createContext();


const AuthProvider = ({ children }) => {

    const [userdata, setuserdata] = useState("");



    useEffect(() => {
        const isSeeded = localStorage.getItem("isSeeded");

        if (!isSeeded) {
            setLocalStorage();
            localStorage.setItem("isSeeded", "true");
        }

        const { employee, admin } = getLocalStorage();
        setuserdata({ employee, admin });
    }, []);

    return (
        <div>
            <DataContext.Provider value={userdata}>
                {children}
            </DataContext.Provider>
        </div>
    )
}

export default AuthProvider