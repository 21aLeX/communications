import { createSlice } from '@reduxjs/toolkit'



const initialState = {
        visible: false,
        id: '',
    
}


const visibleModalSlice = createSlice({
    name: 'visible',
    initialState,
    reducers: {
        setVisible(state, action) {
            state.visible = action.payload.visible
            state.id = action.payload.id
        },

        // deleteContact(state, action) {
        //     state.contact = state.contact.filter(c=>c.id !==action.payload)
        // },
        
    }
})

export const { setVisible} = visibleModalSlice.actions;

export default visibleModalSlice.reducer;