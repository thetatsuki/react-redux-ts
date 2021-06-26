import { UserActionTypes, UserAction, IUserState } from './users.types';

const initalState: IUserState = {
    users: [],
    loading: false,
    error: null,
};


export const userReducer = (state = initalState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return { loading: true, error: null, users: [] };
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload };
        case UserActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: 'Пользователи не получены', users: [] };
        default:
            return state;
    }
};