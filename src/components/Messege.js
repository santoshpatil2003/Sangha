import React,{ useState, useEffect} from 'react'
import './Messege.css'
import {
    Link,
  } from "react-router-dom";
  import { VscMail } from "@react-icons/all-files/vsc/VscMail.js";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';

export default function Messege(prop) {
    // let [message, allowmessage] = useState(false);

    useEffect(()=>{
        // onAuthStateChanged(auth,(currentUser)=>{
        //   if(currentUser.uid === prop.uid){
        //     allowmessage(false)
        //   }else{
        //     allowmessage(true)
        //   }
        // })
    },[]);
  
  
    if(prop.url === undefined  || prop.url === ""){
      return (
        <Link to={prop.sangha === false? `/userprofile/${prop.uid}`:`/sanghaprofile/${prop.uid}`} className='linkname1212'>
          <div className='sanghadata1212'>
              <div className='left-data1212'>
                <div className='circle1212'>
                  {prop.profilename === undefined?<div></div>:<h4>{prop.profilename?.split('')[0]}</h4>}
                </div>
              </div>
              <div className='right-data1212'>
                <div className='nd1212'>
                    <div className='sanghaname'><h4 className='SN1212'>{prop.profilename}</h4></div>
                    <div className='foundername'><span><h4 className='FN1212'>{prop.profileid}</h4></span></div>
                </div>
              </div>
              {/* <div className='messagethem'>
                 <div className='mess'>
                    {message?<VscMail onClick={()=>{}} className='mail'></VscMail>:<div></div>}
                 </div>
              </div> */}
          </div>
        </Link>
      )
    }else{
      return (
        <Link to={prop.sangha === false? `/userprofile/${prop.uid}`:`/sanghaprofile/${prop.uid}`} className='linkname1212'>
          <div className='sanghadata1212'>
              <div className='left-data1212'>
                <div className='circle1212'><img className='circle1212' src={`${prop.url}`}/></div>
              </div>
              <div className='right-data1212'>
                <div className='nd1212'>
                    <div className='sanghaname'><h4 className='SN1212'>{prop.profilename}</h4></div>
                    <div className='foundername'><span><h4 className='FN1212'>{prop.text}</h4></span></div>
                </div>
              </div>
              {/* <div className='messagethem'>
                 <div className='mess'>
                    {message?<VscMail onClick={()=>{}} className='mail'></VscMail>:<div></div>}
                 </div>
              </div> */}
          </div>
        </Link>
      )
    }
}
