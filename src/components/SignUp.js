import React from 'react'
// import { Route, Routes } from 'react-router-dom'
import './SignUp.css'
import SignUpBox from './SignUpBox'
// import SignUpBox2 from './SignUpBox2'
// import SignUpBox2 from './SignUpBox2'
// import {router} from './App'
// import { Router, Route, Switch } from "react-router";
// import {
//     // createBrowserRouter,
//     // BrowserRouter as Router,
//     // RouterProvider,
//     Route,
    // Link,
//     Routes
//   } from "react-router-dom";
//   import React, { useState } from 'react';

export default function SignUp() {
    //  const [bool, setCount] = useState(false);
    return (
        <div className='bodypage'>
          <div className='center'>
                  {/* <Routes>
                      <Route path='signup2' element={<SignUpBox2></SignUpBox2>}/>
                  </Routes> */}
              <SignUpBox></SignUpBox>
              {/* <div className='nextbutton'>
                      <button>Next</button>
                  <Link to="signup2" className='signup1'><button>Next</button></Link>
              </div> */}
          </div>
        </div>
    )
}

