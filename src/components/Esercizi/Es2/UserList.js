import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../../../features/users/usersSlice';
import { setAlbumOwner } from '../../../features/album/albumSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.usersStore);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleClick = (user) => {
    dispatch(setAlbumOwner(user))
  }

  return (
    <ul>
      {
        users?.map(user => <li key={user.id} onClick={() => handleClick(user)}><strong>{user.name}</strong>- {user.email}</li>)
      }
    </ul>
  )
}

export default UserList;