

const initialState = {
    username: 'initial'
 };

 export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER': {
            const username = action;
            return username;
        }
        case 'CLEAR_USER': {
            const username = {username: ''};
            return username;
        }
        default: {
            return state;
        }
    }
 }

// export const userReducer = (state, action) => {
//     switch(action.type) {
//         case 'SET_USER': 
//             return action.payload
//         case 'CLEAR_USER':
//             return ''
//         default: 
//             return state
//     }
// }
