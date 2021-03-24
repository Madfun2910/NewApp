import {UserActions, UserActionType, UserState} from "../../types/users";


const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}


export const userReducer = (state = initialState, action: UserActions): UserState => {
    switch (action.type) {
        case UserActionType.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case UserActionType.FETCH_USERS_SUCCESS:
            return {loading: true, error: null, users: action.payload}
        case UserActionType.FETCH_USERS_ERROR:
            return {loading: true, error: action.payload, users: []}
    }
    return state
}