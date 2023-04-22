import React , {useState,useEffect} from 'react'
import './UserProfileRight.css'
import ProfileComponent from './ProfileComponent';
import { getsanghamembers } from './profiledata';

export default function UserProfileRight(props) {
  let [memberlist, members] = useState([]);

  useEffect(()=>{
    getsanghamembers(memberlist,members,props.uid);
  },[]);

  // const profilecomponent = (<ProfileComponent profilename = 'Santosh Patil' profileid = 'Santoshpatil2003'></ProfileComponent>);
  return (
    <div className='messegebox'>
      <div className='title'>
        <h4 className='title'>{props.title}</h4>
      </div>
      <div className='lis'>
          {/* {props.inside} */}
          { memberlist.length === 0? <div></div> : memberlist.map((m)=>{
                return (
                  <div className='s' key={m['sanghaname']}>
                      {/* <Sanghalistcomponent sanghaname = {m['sanghaname']} uid = {m['uid']} foundername = {m['foundername']}></Sanghalistcomponent> */}
                      <ProfileComponent profilename = {m['name'] } uid = {m['uid']} profileid = {m['username']}></ProfileComponent>
                </div>
                );
          })}
      </div>
      
    </div>
  )
}
