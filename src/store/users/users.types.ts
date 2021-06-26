export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface IUserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

interface IfetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}
interface IfetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
interface IfetchUsersSuccesAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

export type UserAction = IfetchUsersAction | IfetchUsersErrorAction | IfetchUsersSuccesAction;