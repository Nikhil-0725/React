import React from 'react'

const Card = props => {
  const { user } = props
  return (
    <div className='card'>
      <p className='info'>
        <span><b>Name :</b></span>
        <span>{user.firstName}</span>
        <span>{user.lastName}</span>
      </p>
      <p className='info'>
        <span><b>Email :</b></span>
        <span>{user.email}</span>
      </p>
      <p>
        <span><b>Phone Number :</b></span>
        <span>{user.phone}</span>
      </p>
      {/* <p>
        <span>Adress :</span>
        <span>{user.address}</span>
      </p> */}
      <p>
        <span><b>Description :</b></span>
        <span>{user.description}</span>
      </p>
      {/* <p>{user.description}</p> */}
    </div>
  )
}

export default Card