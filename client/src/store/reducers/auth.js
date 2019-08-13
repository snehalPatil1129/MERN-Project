import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "../actions/types";
import {
    stat
} from "fs";
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
};

export default function (state = initialState, action) {
    const {
        type,
        payload
    } = action;
    switch (type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
                token : null,
                loading: false
            }
        default:
            return state;
    }
}