import {UserActions, UserActionType} from "../../types/users";
import {Dispatch} from "redux";
import axios from "axios";

// https://jsonplaceholder.typicode.com/users
export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserActions>) => {
        try {
            dispatch({type: UserActionType.FETCH_USERS})
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {

                dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: res.data})
            }, 500)

        } catch (e) {
            dispatch({
                type: UserActionType.FETCH_USERS_ERROR,
                payload: "Error"
            })
        }
    }
}