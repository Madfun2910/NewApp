 export interface UserState {
    users: any[];
    loading: boolean,
    error: string | null
}

export enum UserActionType {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCSES",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FethUserAction {
    type: UserActionType.FETCH_USERS,
}

interface FethUserSuccessAction {
    type: UserActionType.FETCH_USERS_SUCCESS,
    payload: any[],
}

interface FethUserErrorAction {
    type: UserActionType.FETCH_USERS_ERROR,
    payload: string
}
export type UserActions = FethUserAction | FethUserSuccessAction | FethUserErrorAction
