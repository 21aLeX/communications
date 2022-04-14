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
    }
})

export const { setVisible } = visibleModalSlice.actions;

export default visibleModalSlice.reducer;