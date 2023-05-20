import React , {useState,useEffect} from 'react'
import './UserProfileRight.css'
import ProfileComponent from './ProfileComponent';
// import { getsanghamembers, uploadtext } from './profiledata';
// import { RiSendPlane2Fill } from "@react-icons/all-files/ri/RiSendPlane2Fill";
// import Texts from './Texts';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import {gettexts,listmessages,getsanghamembers } from './profiledata';
import Messege from './Messege';
import Txtmessege from './Txtmessege';
import Members from './Members';

export default function UserProfileRight(props) {
  // let [memberlist, members] = useState([]);
  let [messages, fmessages] = useState([]);
  let [tex, ftext] = useState([]);
  let [userid, usid] = useState();

  useEffect(()=>{
    onAuthStateChanged(auth, async (currentUser) => {
        usid(userid = currentUser.uid);
  });
    // gettexts(tex, ftext,props.uid);
    listmessages(messages,fmessages,props.uid);
    // getsanghamembers(memberlist,members,props.uid);
    // getsanghamembers(memberlist,members,props.uid);
    // gettexts(tex, ftext,props.uid);
    // console.log(tex[(tex.length)-1]?.text)
    // listmessages(messages,fmessages,props.uid);
    // console.log(memberlist)
  },[]);
  // console.log(tex[(tex.length)-1])
  // const profilecomponent = (<ProfileComponent profilename = 'Santosh Patil' profileid = 'Santoshpatil2003'></ProfileComponent>);
  if(props.title === "Messeges"){
    return (
      <div className='messegebox'>
        <div className='title'>
          <h4 className='title'>{props.title}</h4>
        </div>
        <div className='lis'>
            {/* {props.inside} */}
            { messages?.length === 0? <div></div> : messages?.map((m,index)=>{
                  return (
                    <div className='s' key={index}>
                        {/* <Sanghalistcomponent sanghaname = {m['sanghaname']} uid = {m['uid']} foundername = {m['foundername']}></Sanghalistcomponent> */}
                        <Messege url = {m['picurl']} sangha = {false} profilename = {m['name']} uid = {m['uid']} text = {tex[(tex.length)-1]?.text}></Messege>
                  </div>
                  );
            })}
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
  }else if(props.title === "Members"){
    // getsanghamembers(memberlist,members,props.uid);
    return (
      // <Members title = {props.title} uid = {props.uid} memberlist = {memberlist}></Members>
      <Members title = {props.title} uid = {props.uid} ></Members>
    )
  }else{
    // gettexts(tex, ftext,props.uid);
    console.log(userid)
      return (
        <Txtmessege userid = {userid} title = {props.title} uid = {props.uid}></Txtmessege>
      )
    // onAuthStateChanged(auth, async (currentUser) => {
    //   return (
    //     <Txtmessege userid = {currentUser.uid} title = {props.title} uid = {props.uid}></Txtmessege>
    //   )
    // });
  }
}
