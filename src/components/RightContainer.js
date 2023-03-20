import React from 'react'
// import ProfileDp from './ProfileDp'
// import PropTypes from 'prop-types';
import './RightContainer.css'
import Sanghalistcomponent from './Sanghalistcomponent'

export default function RightContainer(props) {
  if(props.lists === true){
    return (
      <div className='right'>
        <div className="Right-container">
          {props.insidecontent}
          {/* <ProfileDp name = 'Santosh patil' nameid = 'Santoshpatil2003'></ProfileDp> */}
          <div className='sanghalists'>
            <Sanghalistcomponent sanghaname = 'Beerbiceps' foundername = 'Ranveer Allahbadia'></Sanghalistcomponent>
            <Sanghalistcomponent sanghaname = 'Beerbiceps' foundername = 'Ranveer Allahbadia'></Sanghalistcomponent>
            <Sanghalistcomponent sanghaname = 'Beerbiceps' foundername = 'Ranveer Allahbadia'></Sanghalistcomponent>
            {/* <Sanghalistcomponent sanghaname = 'Beerbiceps' foundername = 'Ranveer Allahbadia'></Sanghalistcomponent>
            <Sanghalistcomponent sanghaname = 'Beerbiceps' foundername = 'Ranveer Allahbadia'></Sanghalistcomponent>
            <Sanghalistcomponent sanghaname = 'Beerbiceps' foundername = 'Ranveer Allahbadia'></Sanghalistcomponent> */}
          </div>
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
