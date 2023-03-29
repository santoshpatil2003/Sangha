import React from 'react'
import './ProfileComponent.css'
import {
    Link,
  } from "react-router-dom";

export default function ProfileComponent(props) {
  if(props.url === undefined){
    return (
      <Link to={props.sangha === false? `/userprofile/${props.uid}`:`/sanghaprofile/${props.uid}`} className='linkname1212'>
        <div className='sanghadata1212'>
            <div className='left-data1212'>
              <div className='circle1212'>
                <h4>{props.profilename.split('')[0]}</h4>
              </div>
            </div>
            <div className='right-data1212'>
              <div className='nd1212'>
                  <div className='sanghaname'><h4 className='SN1212'>{props.profilename}</h4></div>
                  <div className='foundername'><span><h4 className='FN1212'>{props.profileid}</h4></span></div>
              </div>
            </div>
        </div>
      </Link>
    )
  }else{
    return (
      <Link to={props.sangha === false? `/userprofile/${props.uid}`:`/sanghaprofile/${props.uid}`} className='linkname1212'>
        <div className='sanghadata1212'>
            <div className='left-data1212'>
              <div className='circle1212'></div>
            </div>
            <div className='right-data1212'>
              <div className='nd1212'>
                  <div className='sanghaname'><h4 className='SN1212'>{props.profilename}</h4></div>
                  <div className='foundername'><span><h4 className='FN1212'>{props.profileid}</h4></span></div>
              </div>
            </div>
        </div>
      </Link>
    )
  }
}
