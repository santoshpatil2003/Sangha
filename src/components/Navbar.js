import React,{useState} from 'react';
import './Navbar.css';
// import {
//   Link,
// } from "react-router-dom";
import Profiledropdown from './Profiledropdown';
// import { listAllUsers } from './profiledata';

// listAllUsers()

export default function Navbar(props) {
  let [search , searchf] = useState(false);
  return (
    <div className='seee'>
      <div className="nav-bar">
        <nav>
          <div className="search"><input type="text" onFocus={() => {searchf(search = true)}} onBlur = {() => {searchf(search = false)}} /><div className='space'></div><button>Search</button></div>
          <div className='profilecircle'>
            <div className='p' >
              <div className='pc'>
                <Profiledropdown picurl = {props.picurl}></Profiledropdown>
                {/* <Link className='li' to='/'>
                  <img className='u' src="https://pbs.twimg.com/profile_images/1414874230794031105/dL_AxaaQ_400x400.jpg" alt="Girl in a jacket"/>
                </Link> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
      {search === true?<div className='dropdown2'>
        {props.searchp}
        {props.searchp}
        {props.searchp}
        {props.searchp}
        {props.searchp}
        {props.searchp}
        {props.searchp}
        {props.searchp}
        {props.searchp}
        {props.searchp}
      </div>:<div></div>}
    </div>
  )
}
