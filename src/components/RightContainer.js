import React,{useState , useEffect} from 'react';
// import ProfileDp from './ProfileDp'
// import PropTypes from 'prop-types';
import './RightContainer.css';
import Sanghalistcomponent from './Sanghalistcomponent';
import { listAllUsers } from './profiledata';

export default function RightContainer(props) {
  let [add, setAdd] = useState([]);

  useEffect(() => {
    // console.log(typeof a)
    let a = listAllUsers();
    a.then((t)=>{
      setAdd(add = t);
    })
  },[]);


  if(props.lists === true){
    return (
      <div className='right'>
        <div className="Right-container">
          {props.insidecontent}
          {/* <ProfileDp name = 'Santosh patil' nameid = 'Santoshpatil2003'></ProfileDp> */}
          <div className='sanghalists'>
          {
            // console.log(t)
            add.map((al) =>{
              // console.log(al['uid'])
              return (
                <div className='s' key={al['sanghaname']}>
                  <Sanghalistcomponent sanghaname = {al['sanghaname']} uid = {al['uid']} foundername = {al['foundername']}></Sanghalistcomponent>
                  {/* <ProfileComponent profilename = {al['sanghaname']}></ProfileComponent> */}
                </div>
              )
            })
  
        }
            {/* <Sanghalistcomponent sanghaname = 'Beerbiceps' foundername = 'Ranveer Allahbadia'></Sanghalistcomponent>
            <Sanghalistcomponent sanghaname = 'Beerbiceps' foundername = 'Ranveer Allahbadia'></Sanghalistcomponent>
            <Sanghalistcomponent sanghaname = 'Beerbiceps' foundername = 'Ranveer Allahbadia'></Sanghalistcomponent>
            <Sanghalistcomponent sanghaname = 'Beerbiceps' foundername = 'Ranveer Allahbadia'></Sanghalistcomponent> */}
            {/* <Sanghalistcomponent sanghaname = 'Beerbiceps' foundername = 'Ranveer Allahbadia'></Sanghalistcomponent>
            <Sanghalistcomponent sanghaname = 'Beerbiceps' foundername = 'Ranveer Allahbadia'></Sanghalistcomponent>
            <Sanghalistcomponent sanghaname = 'Beerbiceps' foundername = 'Ranveer Allahbadia'></Sanghalistcomponent> */}
          </div>
          <div className='seemore'><h4>See more</h4></div>
        </div>
      </div>
    )
  }else{
    return (
      <div className='right'>
        <div className="Right-container">
          {props.insidecontent}
          {/* <ProfileDp name = 'Santosh patil' nameid = 'Santoshpatil2003'></ProfileDp> */}
          {/* <div className='sanghalists'>
            <Sanghalistcomponent sanghaname = 'Beerbiceps' foundername = 'Ranveer Allahbadia'></Sanghalistcomponent>
          </div> */}
        </div>
      </div>
    )
  }
}

// RightContainer.prototype = {
//   props : PropTypes.func
// }
