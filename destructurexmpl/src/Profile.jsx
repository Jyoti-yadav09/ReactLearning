import React from 'react';

const Profile = ({name, age}) => {
  return (
    <div>
      <p>Users Details</p>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
    </div>
  )
}

export default Profile;
