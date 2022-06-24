import React, { useState, useContext, createContext } from 'react';

// const UserNameContext = createContext();
// const UpdateUserNameContext = createContext();

// export const useUserName= () => {
//     return useContext(UserNameContext);
// };

// export const useUpdateUserName = () => {
//     return useContext(UpdateUserNameContext);
// };

// export const UserProvider = ({ value, children }) => {
//   const [userName, setUserName] = useState(value);
//   return (
//     <UserNameContext.Provider value={userName}>
//       <UpdateUserNameContext.Provider value={setUserName}>
//         {children}
//       </UpdateUserNameContext.Provider>
//     </UserNameContext.Provider>
//   );
// };

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        username: 'test',
        email: 'test'
    });

    // sets the logged in username and email.
    const userLogin = (loginUser) => {
        setUser({...loginUser});
    }

    // clears the context on logout.
    const clearUser = () => {
        setUser({
            username: '',
            email: ''
        })
    }

    return (
        <UserContext.Provider value = {{ user, userLogin, clearUser }}>
            {children}
        </UserContext.Provider>
    );
};