import React, {useState,useEffect} from 'react'
import './UserProfileRight';
import { db } from "./Firebase";
import {onSnapshot, collection, orderBy,query} from "firebase/firestore";
import { RiSendPlane2Fill } from "@react-icons/all-files/ri/RiSendPlane2Fill";
import { uploadtext } from './profiledata';
import Texts from './Texts';
import { onAuthStateChanged } from 'firebase/auth';
// import { list } from 'firebase/storage'
import { auth } from './Firebase';

export default function Txtmessege(props) {
    let [tex, ftexts] = useState([]);
    let [chat, fchats] = useState("");
    let [texts, ftextlist] = useState([]);
    // let [list, ftextlist2] = useState([]);
    let [flag, flagship] = useState(1);

    useEffect(()=>{
            const gettex = async () => {
                const data = collection(db, "user", `${props.userid}/text/${props.uid}/chat`);
                try {
                    const itemsQuery = query(data, orderBy('time'));
                    const unsub = onSnapshot(itemsQuery,(s)=>{
                    let l = [];
                    s.forEach((m)=>{
                        l.push(m.data());
                    });
                    //   console.log("added");
                    ftexts(tex = l);
                    // ftextlist(texts = l)
                    console.log("added")
                });
                    return () => {unsub()}
                } catch (error) {
                    console.log(error);
                }
            }
        if(flag === 1){
            gettex().then(()=>{
                if(tex.length === 0 ){
                    flagship(flag = 1);
                    gettex()
                }
            })
            flagship(flag = 0);
        }else{
            return;
        }
    },[tex])

    const upload = () =>{
            onAuthStateChanged(auth, async (currentUser) => {
            // ftextlist2(list = texts);
            tex.push({"text":chat,"senderuid":currentUser.uid});
            texts.push({"text":chat,"senderuid":currentUser.uid});
            // ftextlist(texts = list);
        // console.log(texts);
            uploadtext(chat,props.uid)
        })
    }
  return (
    <div className='messegebox'>
        <div className='title'>
          <h4 className='title'>{props.title}</h4>
        </div>
        <div className='lis'>
            {/* {props.inside} */}
            { 
            tex?.length === 0? <div>Loading...</div> : tex?.map((m,index)=>{
                  return (
                    <div className='s55' key={index}>
                        {/* <Sanghalistcomponent sanghaname = {m['sanghaname']} uid = {m['uid']} foundername = {m['foundername']}></Sanghalistcomponent> */}
                        <Texts text = {m['text']} uid = {m['senderuid']}></Texts>
                  </div>
                  );
            })
            }
            {/* <Texts text = "Hi, how are you? lets meet soon, so send me the place and time." uid = "S1rwpvEGbSab8GLf3BFaiQetDdu1"></Texts>
            <Texts text = "I am fine, yaa sure lets meet at church street around 4pm." uid = "qiuMZSrEDRMPvOtTDxpFGVPc7du1"></Texts>
            <Texts text = "cool see you soon then." uid = "S1rwpvEGbSab8GLf3BFaiQetDdu1"></Texts> */}
        </div>
        {props.title === "Messege"?<div className='sendmessege'>
          <div className='messegeboxinput'>
            <input className='messegeboxinput2' onChange={(e)=>{fchats(chat = e.target.value)}}></input>
            <div className='sendtext'>
              <button className='sendtext2' onClick={()=>{upload()}}><RiSendPlane2Fill className='Risend'></RiSendPlane2Fill></button>
            </div>
          </div>
        </div>:<div></div>}
      </div>
  )
}