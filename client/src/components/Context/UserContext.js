import React, { useState, useContext, createContext } from 'react';

const UserNameContext = createContext();
const UpdateUserNameContext = createContext();

export const useUserName= () => {
    return useContext(UserNameContext);
};

export const useUpdateUserName = () => {
    return useContext(UpdateUserNameContext);
};

export const UserProvider = ({ value, children }) => {
    const [userName, setUserName] = useState(value);
    return (
        <UpdateUserNameContext.Provider value={userName}>
            <UpdateUserNameContext value={setUserName}>
                {children}
            </UpdateUserNameContext>
        </UpdateUserNameContext.Provider>
    );
};