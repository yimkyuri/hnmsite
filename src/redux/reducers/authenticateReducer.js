// import { authenticateAction } from './../actions/authenticateAction';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    password: "",
    authenticate: false,
};

// function authenticateReducer(state=initialState, action) {
//     const { type, payload } = action;
//     switch (type) {
//         case "LOGIN_SUCCESS": {
//             return {
//                 ...state,
//                 id: payload.id,
//                 password: payload.password,
//                 authenticate: true,
//             };
//         }
//         case "LOGOUT_SUCCESS": {
//             return {
//                 ...state,
//                 authenticate: false,
//             };
//         }
//         default: {
//             return { ...state };
//         }
//     }
// }
// export default authenticateReducer;

const authenticateSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logInSuccess(state, action) {
            state.id = action.payload.id;
            state.password = action.payload.password;
            state.authenticate = true;
        },
        logOutSuccess(state) {
            state.id = '';
            state.password = '';
            state.authenticate = false;
        },
    }
});

export const { logInSuccess, logOutSuccess } = authenticateSlice.actions;
export default authenticateSlice.reducer;


