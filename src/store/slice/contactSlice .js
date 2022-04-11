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
            state.contact = state.contact.filter(c=>c.id !==action.payload)
        },
        changeContact(state,action){
            state.contact[action.payload.id].name = action.payload.name
            state.contact[action.payload.id].telephone = action.payload.telephone
        }


    }
})

export const { setContact,deleteContact, changeContact } = contactSlice.actions;

export default contactSlice.reducer;