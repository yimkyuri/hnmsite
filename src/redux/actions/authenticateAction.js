import { logInSuccess } from "../reducers/authenticateReducer"
import { logOutSuccess } from "../reducers/authenticateReducer"

function login(id,password) {
    return (dispatch) => {
        // dispatch({ type: "LOGIN_SUCCESS", payload: { id, password }});

        dispatch(logInSuccess({ id, password }))
    };
}

function logout() {
    return (dispatch) => {
        dispatch(logOutSuccess())
    }
}

export const authenticateAction = { login, logout }