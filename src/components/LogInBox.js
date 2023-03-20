import React, {useState} from 'react';
import './LogInBox.css';
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LogInBox() {

    let [email2, setemail2] = useState("");
    let [password2, setsetpassword2] = useState("");

    const login = async () =>{
        try{
            await signInWithEmailAndPassword(auth,email2,password2).then(() => {
                console.log("done");
            });
        }catch(e){
            console.log(e.message);
        }
    }

  return (
    <div className='bodybox23'>
        <div className='box23'>
            <header className='box23-in'>Log In</header>
            <div className='inputclass23'>
                <input className='inputclass23-in' placeholder='Enter your Email' onChange = {(e) => {setemail2(email2 = e.target.value)}} type={"email"} name='email'/>
            </div>
            <div className='inputclass23'>
                <input className='inputclass23-in' placeholder='Enter your Password' onChange = {(e) => {setsetpassword2(password2 = e.target.value)}} type={"password"} name='password'/>
            </div>
            <div className='loginbutton623'>
                <button className='loginbutton623-in' onClick={login}>Log In</button>
            </div>
        </div>
    </div>
  )
}
