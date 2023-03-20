import React from 'react'
import './UserProfileMiddle.css'

export default function UserProfileMiddle(props) {
  return (
    <div className='middlebox'>
        <div className='toppost'>
            <div className='userpost'></div>
            <div className='usernamedp'>
              <div className='postdp'>

              </div>
              <div className='namedata'>
                <div className='na'><h4 className='idh4'>{props.name}</h4></div>
                <div className='iddata'><span className='idspan'><h4 className='nam34'>ID: {props.nameid}</h4></span></div>
              </div>
            </div>
        </div>
    </div>
  )
}
