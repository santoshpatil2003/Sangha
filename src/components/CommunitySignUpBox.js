import React, { useState } from 'react'
import './CommunitySignUpBox.css'
import { VscArrowRight } from "@react-icons/all-files/vsc/VscArrowRight";
import { VscArrowLeft } from "@react-icons/all-files/vsc/VscArrowLeft";
import { auth } from "./Firebase";
import { db } from "./Firebase";
import {setDoc,doc} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function CommunitySignUpBox() {
    let [count, setCount] = useState(false);
    let [email, setemail] = useState("");
    let [name, setname] = useState("");
    let [username, setusername] = useState("");
    // let [dateofbirth, setdateofbirth] = useState("");
    let [password, setsetpassword] = useState("");
    let [confirmpassword, setconfirmpassword] = useState("");

    const register2 = async () =>{
        try{
            if(password === confirmpassword){
                await createUserWithEmailAndPassword(auth,email,password).then(async () => {
                    setTimeout( async () => {
                        await setDoc(doc(db,"user",`${auth.currentUser.uid}`),{
                            "foundername" : name,
                            "sanghaname" : username, 
                            "email" : email, 
                            "password": password,
                            "Sangha" : true,
                            "members" : [{}],
                            "friendsinsangha" : [{}],
                            "profilepiclink": "",
                            "picurl": "",
                        }).then(()=>{
                            console.log("done");
                        });
                    }, 5000);
                    // console.log(auth.currentUser.uid.toString);
                });
            }
        }catch(e){
            console.log(e.message);
        }
    }

    if(count === false){
        return (
            <div className='bodybox'>
            <div className='box'>
                <header>Just Build it</header>
                <div className='email'>
                    <input placeholder='Enter your Email' type={"email"} onChange = {(e) => {setemail(email = e.target.value)}} name='email'/>
                </div>
                <div className='name15'>
                    <input placeholder='Enter Founders Name' type={"text"} onChange = {(e) =>{setname(name = e.target.value)}} name='name'/>
                </div>
                <div className='nex'>
                        <button className='nex-in' onClick={()=>setCount(count = true)}><VscArrowRight size={23}></VscArrowRight></button>
                </div>
            </div>
        </div>
  )
    }else{
        return (
            <div className='bodybox'>
                <div className='box'>
                <header>Just Build it</header>
                <div className='inputclass2'>
                    <input placeholder='Enter Sangha name' type={"text"} onChange = {(e) =>{setusername(username = e.target.value)}} name='username'/>
                </div>
                <div className='inputclass2'>
                    <input placeholder='Enter your password' type={"password"} onChange = {(e) =>{setsetpassword(password = e.target.value);}} name='password'/>
                </div>
                <div className='inputclass2'>
                    <input placeholder='Confirm your Password' type={"password"} onChange = {(e) => {setconfirmpassword(confirmpassword = e.target.value)}} name='confirmpassword'/>
                </div>
                <div className='loginbutton10'>
                    <button onClick={()=>setCount(count = false)} className='nextbutton10'><VscArrowLeft size={23}></VscArrowLeft></button>
                    <button className='b' onClick={register2}>Sign Up</button>
                </div>
                </div>
            </div>
        )
    }
}
