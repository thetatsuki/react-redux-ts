import axios from 'axios';
import { Dispatch } from 'react';
import { UserAction, UserActionTypes } from './users.types';


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS });
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Ошибка при загрузки пользователей'
            });
        }
    };
};
