import { useEffect } from 'react';
import { FC } from 'react';
import { useAction } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


interface IUserList {

}

const UserList: FC<IUserList> = () => {

    const { users, loading, error } = useTypedSelector(state => state.users);
    const { fetchUsers } = useAction();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <h1>Loading users...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }


    return (
        <div>
            {users.map(user => (
                <li>
                    {user.name}
                </li>
            ))}
        </div>
    );
};

export default UserList;