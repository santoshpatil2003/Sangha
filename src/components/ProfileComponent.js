import React , {useState,useEffect} from 'react'
import './ProfileComponent.css'
import {
    Link,
  } from "react-router-dom";
  import { VscMail } from "@react-icons/all-files/vsc/VscMail.js";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';

export default function ProfileComponent(props) {
  let [message, allowmessage] = useState(false);

  useEffect(()=>{
      onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser.uid === props.uid){
          allowmessage(false)
        }else{
          allowmessage(true)
        }
      })
  },[]);


  if(props.url === undefined){
    return (
      <Link to={props.sangha === false? `/userprofile/${props.uid}`:`/sanghaprofile/${props.uid}`} className='linkname1212'>
        <div className='sanghadata1212'>
            <div className='left-data1212'>
              <div className='circle1212'>
                {props.profilename === undefined?<div></div>:<h4>{props.profilename?.split('')[0]}</h4>}
              </div>
            </div>
            <div className='right-data1212'>
              <div className='nd1212'>
                  <div className='sanghaname'><h4 className='SN1212'>{props.profilename}</h4></div>
                  <div className='foundername'><span><h4 className='FN1212'>{props.profileid}</h4></span></div>
              </div>
            </div>
            <div className='messagethem'>
               <div className='mess'>
                  {message?<VscMail className='mail'></VscMail>:<div></div>}
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
