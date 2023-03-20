import React from 'react'
import "./SignUpBox2.css"
// import {
//     // createBrowserRouter,
//     // RouterProvider,
//     // Route,
//     Link,
//   } from "react-router-dom";

export default function SignUpBox2() {
  return (
    <div className='bodybox'>
        <div className='box'>
            <header>Sign Up</header>
            <div className='username'>
                <input placeholder='Enter your username' type={"text"} name='username'/>
            </div>
            <div className='password'>
                <input placeholder='Enter your password' type={"password"} name='name'/>
            </div>
            <div className='confirmpassword'>
                <input placeholder='Confirm your Password' type={"password"} name='name'/>
            </div>
            <div className='loginbutton'>
                <button>Sign Up</button>
            </div>
        </div>
    </div>
  )
}
