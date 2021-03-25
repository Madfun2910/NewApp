import React, {useEffect} from 'react';
import {UseTypeSelector} from "../customHooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";

const UserList: React.FC = () => {
    const {users, error, loading} = UseTypeSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (loading) {

        return <h1>Loading</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(e =>
                <div key={e.id}>{e.name}</div>
            )}
        </div>
    );
};

export default UserList;