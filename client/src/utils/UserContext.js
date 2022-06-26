import React, { useState, useContext, createContext, useReducer } from 'react';
import userReducer from './reducers';


// export default function UserProvider(props) {
//     return <Provider store = {store} {...props} />
// }


export const UserContext = createContext();

export const UserProvider = (props) => {

    const [username, dispatch] = useReducer(userReducer, {})

    return (
        <UserContext.Provider value = {{ username, dispatch }}>
            {props.children}
        </UserContext.Provider>
    )
}



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

// const UserContext = createContext();

// export const useUserContext = () => {
//   return useContext(UserContext);
// }

// export const UserProvider = (props) => {

//     const [user, setUser] = useState('initial');

//     const newUser = (username) => {
//         setUser(username);
//     }

//     const clearUser = () => {
//         setUser('');
//     }

//     return (
//         <UserContext.Provider value = {{ user, newUser, clearUser }}>
//             {props.children}
//         </UserContext.Provider>
//     );
// };

