import React from 'react'
import './Sanghalistcomponent.css'
import {
  Link,
} from "react-router-dom";

export default function Sanghalistcomponent(props) {
  return (
    <Link to='/Sanghaprofile' className='linkname'>
      <div className='sanghadata'>
          <div className='left-data'>
            <div className='circle'>
                <img className='imgu' src="https://pbs.twimg.com/profile_images/1414874230794031105/dL_AxaaQ_400x400.jpg" alt="gi"/>
            </div>
          </div>
          <div className='right-data'>
            <div className='nd'>
                <div className='sanghaname'><h4 className='SN'>{props.sanghaname}</h4></div>
                <div className='foundername'><span><h4 className='FN'>By: {props.foundername}</h4></span></div>
            </div>
          </div>
      </div>
    </Link>
    
  )
}
