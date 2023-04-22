import React from 'react'
import './InsideHome.css'
// import Navbar from './Navbar';
import LeftContainer from './LeftContainer';
import MiddleContainer from './MiddleContainer';
import RightContainer from './RightContainer';
// import ProfileDp from './ProfileDp';

export default function InsideHome(props) {
  // const Profiledp = (<ProfileDp name='Santosh Patil' nameid = 'Santoshpatil2003'/>);
  return (
    <div className='s'>
        {props.navbar}
      <div className="body10">
        <LeftContainer></LeftContainer>
        <MiddleContainer insidecontent = {props.datamiddle} uid = {props.uid} ></MiddleContainer>
        <RightContainer insidecontent = {props.dataright} lists = {props.lists} uid = {props.uid}></RightContainer>
      </div> 
    </div>
  )
}
