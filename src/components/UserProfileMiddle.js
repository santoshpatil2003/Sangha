import React from 'react'
import './UserProfileMiddle.css'

export default function UserProfileMiddle(props) {
  if(props.url === undefined || props.url === ""){
    return (
      <div className='middlebox'>
          <div className='toppost'>
              <div className='userpost'></div>
              <div className='usernamedp'>
                <div className='postdp'>
                  {props.name.split('')[0]}
                      {/* <img className='postdp22' src="https://pbs.twimg.com/profile_images/1414874230794031105/dL_AxaaQ_400x400.jpg" alt="Girl in a jacket"/> */}
                </div>
                <div className='namedata'>
                  <div className='na'><h4 className='idh4'>{props.name}</h4></div>
                  <div className='iddata'><span className='idspan'><h4 className='nam34'>{props.nameid}</h4></span></div>
                </div>
              </div>
          </div>
      </div>
    )
  }else{
    return (
      <div className='middlebox'>
          <div className='toppost'>
              <div className='userpost'></div>
              <div className='usernamedp'>
                <div className='postdp'>
                  <img className='postdp222' src={`${props.url}`}/>
                </div>
                <div className='namedata'>
                  <div className='na'><h4 className='idh4'>{props.name}</h4></div>
                  <div className='iddata'><span className='idspan'><h4 className='nam34'>{props.nameid}</h4></span></div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}
