import React, { useState } from 'react';
import './SignUpBox.css'
import { useNavigate } from "react-router-dom";
// import SignUpBox2 from './SignUpBox2';
//   import React, { useState } from 'react';
// import { IconName } from "react-icons/bs";
import { VscArrowRight } from "@react-icons/all-files/vsc/VscArrowRight";
import { VscArrowLeft } from "@react-icons/all-files/vsc/VscArrowLeft";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ColorRing } from 'react-loader-spinner';
import { auth } from "./Firebase";
import { db } from "./Firebase";
// import { doc,setDoc } from "firebase/firestore";
import {setDoc,doc} from "firebase/firestore";

export default function SignUpBox() {
    // function next(){
    //     console.log("hey");
    // }

    let [count, setCount] = useState(false);
    let [email, setemail] = useState("");
    let [name, setname] = useState("");
    let [username, setusername] = useState("");
    let [dateofbirth, setdateofbirth] = useState("");
    let [password, setsetpassword] = useState("");
    let [confirmpassword, setconfirmpassword] = useState("");
    let [signup, dosignup] = useState();
    const navigate = useNavigate();

    const register = async () =>{
        try{
            if(password === confirmpassword){
                dosignup(signup = 0);
                await createUserWithEmailAndPassword(auth,email,password).then(() =>{
                    setTimeout( async () => {
                        await setDoc(doc(db,"user",`${auth.currentUser.uid}`),{
                            "name" : name,
                            "username" : username, 
                            "email" : email, 
                            "dateofbirth" : dateofbirth,
                            "password": password,
                            "Sangha" : false,
                            "memberof" : [{}],
                            "friendsinsangha" : [{}],
                            "profilepiclink": "",
                            "picurl": "",
                        }).then(()=>{
                            dosignup(signup = 3);
                            setTimeout(() => {
                                navigate('/');
                            }, 2000);
                            console.log("done");
                        });
                    }, 5000);

                });
                    // console.log(auth.currentUser.uid.toString);
            }
        }catch(e){
            console.log(e.message);
        }
    }

    // const check = () => {
    //     if(password === confirmpassword){
    //         checkpassword(checkpass = true);
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }


    if(count === false){
        return (
        <div className='bodybox'>
            <div className='box'>
                <header>Sign Up</header>
                <div className='email'>
                    <input placeholder='Enter your Email' type={"email"} onChange = {(e) => {setemail(email = e.target.value)}} name='email'/>
                </div>
                <div className='name23'>
                    <input placeholder='Enter your Name' type={"text"} onChange = {(e) =>{setname(name = e.target.value)}} name='name'/>
                </div>
                <div className='inputclass2'>
                    <input placeholder='Enter your username' type={"text"} onChange = {(e) =>{setusername(username = e.target.value)}} name='username'/>
                </div>
                <div className='nex'>
                        <button onClick={()=>setCount(count = true)}><VscArrowRight size={23}></VscArrowRight></button>
                </div>
            </div>
        </div>
  )
    }else{
        return (
            <div className='bodybox'>
                <div className='box'>
                <header>Sign Up</header>
                <div className='inputclass2'>
                    <input placeholder='Enter date of birth' type={"date"} onChange = {(e) =>{setdateofbirth(dateofbirth = e.target.value)}} name='dob'/>
                </div>
                <div className='inputclass2'>
                    <input placeholder='Enter your password' type={"password"} onChange = {(e) =>{setsetpassword(password = e.target.value);}} name='password'/>
                </div>
                <div className='inputclass2'>
                    <input placeholder='Confirm your Password' type={"password"} onChange = {(e) => {setconfirmpassword(confirmpassword = e.target.value);}} name='confirmpassword'/>
                    <span>{password !== confirmpassword && confirmpassword !== "" ? (<span className='co'>Type correct password</span>) :(<span></span>)}</span>
                </div>
                <div className='loginbutton10'>
                    <button onClick={()=>setCount(count = false)} className='nextbutton10'><VscArrowLeft size={23}></VscArrowLeft></button>
                    {signup === 0? 
                    <button className='b'>
                        <ColorRing visible={true}
                        height="40"
                        width="40"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#AC66FE','#AC66FE','#AC66FE','#AC66FE','#AC66FE']}></ColorRing>
                    </button>: signup === 1?
                    <button className='b'>
                        done
                    </button>:
                    <button className='b' onClick={register}>
                        Sign Up
                    </button> 
                }
                </div>
                </div>
            </div>
        )
    }
}