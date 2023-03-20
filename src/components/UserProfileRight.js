import React from 'react'
import './UserProfileRight.css'
// import ProfileComponent from './ProfileComponent';

export default function UserProfileRight(props) {
  // const profilecomponent = (<ProfileComponent profilename = 'Santosh Patil' profileid = 'Santoshpatil2003'></ProfileComponent>);
  return (
    <div className='messegebox'>
      <div className='title'>
        <h4 className='title'>{props.title}</h4>
      </div>
      <div className='lis'>
          {props.inside}
      </div>
      
    </div>
  )
}
