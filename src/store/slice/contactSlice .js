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
                id: Date.now()
            })
        },

        deleteContact(state, action) {
            console.log(action.payload)
            state.contact = state.contact.filter(c=>c.id !==action.payload)
        }


    }
})

export const { setContact,deleteContact } = contactSlice.actions;

export default contactSlice.reducer;