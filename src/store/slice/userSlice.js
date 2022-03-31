import {createSlice} from '@reduxjs/toolkit'

const initialState={
    sing: null,
}
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser(state, action){
            state.sing = action.payload.sing;
        }
    }
})
export const{setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;