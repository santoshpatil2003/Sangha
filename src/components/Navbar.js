import React,{useState , useEffect} from 'react';
import './Navbar.css';
// import {
//   Link,
// } from "react-router-dom";
import Profiledropdown from './Profiledropdown';
import { listAllUsers2 } from './profiledata';
import ProfileComponent from './ProfileComponent';
// console.log(a);

export default function Navbar(props) {
  let [search , searchf] = useState(false);
  let [add, setAdd] = useState([])

  useEffect(() => {
    // console.log(typeof a)
    let a = listAllUsers2();
    a.then((t)=>{
      setAdd(add = t);
    })
  },[])
  // console.log(props.picurl === '')
  return (
    <div className='seee'>
      <div className="nav-bar">
        <nav>
        {/* <div className="search"><input type="text" onFocus={() => {searchf(search = true)}} onBlur = {() => {searchf(search = false)}} /><div className='space'></div><button>Search</button></div> */}
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
        {
            // console.log(t)
            add.map((al) =>{
              // console.log(al['sanghaname'])
              return (
                <div className='l' key={al['uid']}>
                  <ProfileComponent uid = {al['uid']} sangha = {al['Sangha']} profilename = {al['Sangha'] === true?al['sanghaname']:al['name']} profileid = {al['Sangha'] === true?al['foundername']:al['username']}></ProfileComponent>
                </div>
              )
            })
  
        }
        {/* {props.searchp}
        {props.searchp}
        {props.searchp}
        {props.searchp}
        {props.searchp}
        {props.searchp}
        {props.searchp}
        {props.searchp}
        {props.searchp}
        {props.searchp} */}
      </div>:<div></div>}
    </div>
  )
}
