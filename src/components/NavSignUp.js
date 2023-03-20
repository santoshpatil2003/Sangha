import React from 'react'
import './NavSignUp.css'
import {
  // createBrowserRouter,
  // RouterProvider,
  // Route,
  Link,
} from "react-router-dom";

export default function NavSignUp() {
  return (
    <div className='navbar'>
      <div className='leftname'>
        <Link className='backhome' to='/'><h4 className='backhometext'>Sangha</h4></Link>
      </div>
      <div className='rightname'>
        <div className='community'>
          <Link to="community" className='community'><h4 className='communitytext'>Commumity</h4></Link>
        </div>
        <div className='signup'>
          <Link to="signup" className='signup1'><h4 className='signup1text'>Signup</h4></Link>
        </div>
      </div>
    </div>
  )
}
