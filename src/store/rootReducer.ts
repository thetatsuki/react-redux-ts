import { userReducer } from './users/users.reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    users: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;