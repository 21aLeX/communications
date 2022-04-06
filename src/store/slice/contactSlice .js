import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    contact: [],
}


const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        setContact(state, action) {
            state.contact.push({
                name: action.payload.name,
                telephone: action.payload.telephone,
                id: Date.now(),
            },
            // deletContact(action){

            // }
            );
        }
    }
})

export const  {setContact} = contactSlice.actions;

export default  contactSlice.reducer;