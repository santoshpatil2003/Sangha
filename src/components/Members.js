import React, {useState,useEffect} from 'react';
import './UserProfileRight';
// import Messege from './Messege';
// import {getsanghamembers} from './profiledata';
import ProfileComponent from './ProfileComponent';
import { getsanghamembers} from './profiledata';

export default function Members(props) {
    let [memberlist, members] = useState([]);
    let [uid, uids] = useState();

    if(uid != props.uid){
      uids(uid = props.uid);
  }
    useEffect(()=>{
        getsanghamembers(memberlist,members,props.uid);
        console.log("print")
      },[uid]);

  return (
    <div className='messegebox'>
        <div className='title'>
          <h4 className='title'>{props.title}</h4>
        </div>
        <div className='lis'>
            {/* {props.inside} */}
            { 
            memberlist?.length === 0? <div></div> : memberlist?.map((m,index)=>{
                  return (
                    <div className='s2' key={index}>
                        {/* <Sanghalistcomponent sanghaname = {m['sanghaname']} uid = {m['uid']} foundername = {m['foundername']}></Sanghalistcomponent> */}
                        <ProfileComponent sangha = {false} profilename = {m['name'] } uid = {m['uid']} profileid = {m['username']}></ProfileComponent>
                  </div>
                  );
            })
            }

            
            {/* <ProfileComponent profilename = "Sangha" uid = "vIcwqcF4WNVm75xqwJjDn15mUQr2" profileid = "Tejas"></ProfileComponent>
            <ProfileComponent profilename = "Sangha" uid = "vIcwqcF4WNVm75xqwJjDn15mUQr2" profileid = "Tejas"></ProfileComponent>
            <ProfileComponent profilename = "Sangha" uid = "vIcwqcF4WNVm75xqwJjDn15mUQr2" profileid = "Tejas"></ProfileComponent>
            <ProfileComponent profilename = "Sangha" uid = "vIcwqcF4WNVm75xqwJjDn15mUQr2" profileid = "Tejas"></ProfileComponent>
            <ProfileComponent profilename = "Sangha" uid = "vIcwqcF4WNVm75xqwJjDn15mUQr2" profileid = "Tejas"></ProfileComponent>
            <ProfileComponent profilename = "Sangha" uid = "vIcwqcF4WNVm75xqwJjDn15mUQr2" profileid = "Tejas"></ProfileComponent>
            <ProfileComponent profilename = "Sangha" uid = "vIcwqcF4WNVm75xqwJjDn15mUQr2" profileid = "Tejas"></ProfileComponent> */}
        </div>
      </div>
  )
}
