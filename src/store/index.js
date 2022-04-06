import {configureStore} from '@reduxjs/toolkit';
import contactReducer from './slice/contactSlice ';
import userReducer from './slice/userSlice';

export const store = configureStore({
    reducer:{
        user: userReducer,
        contact: contactReducer,
    }
})