import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sing: sessionStorage.getItem('sing'),
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.sing = action.payload.sing;
        },
        removeUser(state) {
            state.sing = sessionStorage.removeItem('sing');
        },
    }
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;