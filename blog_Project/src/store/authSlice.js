
// The file to track the authentication of user and will be track by store.

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status : false,         // by default user authentication is not given
    userData : null         // and no data available.   
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;       // can be without userData
        },
        logout : (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;       // login & logout are actions of reduces
export default authSlice.reducer;