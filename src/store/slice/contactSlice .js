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
            state.contact = state.contact.filter(c => c.id !== action.payload)
        },
        changeContact(state, action) {
            for (let st of state.contact) {
                if (st.id == action.payload.visible.id) {
                    st.name = action.payload.name
                    st.telephone = action.payload.telephone
                }
            }
        }


    }
})

export const { setContact, deleteContact, changeContact } = contactSlice.actions;

export default contactSlice.reducer;