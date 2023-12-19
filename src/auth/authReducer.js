import { types } from '../types/types';

const state = {
    name: 'Alexis',
    loggedIn: true,
}

export const authReducer = (action) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload,
                loggedIn: true,
            }

        case types.logout: 
            return {
                loggedIn: false,
            }
    
        default:
            return state;
    }
}