
 export default function userReducer(state, action) {
    switch (action.type) {
        case 'SET_USER': {
            const username = action.payload;
            return username;
        }
        case 'CLEAR_USER': {
            const username = {};
            return username;
        }
        default: {
            return state;
        }
    };
 };