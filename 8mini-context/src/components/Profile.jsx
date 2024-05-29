import React, { useContext } from 'react'

import UserConetxt from '../context/UserContext'


function Profile() {
  const { user } = useContext(UserConetxt);
  if (!user) return <>
    <div>please login</div>
  </>
  return (
    <div>Welcome {user.username}</div>
  )
}

export default Profile