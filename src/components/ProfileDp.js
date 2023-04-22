import React from 'react'
import './ProfileDp.css'
import {Link} from "react-router-dom";

export default function ProfileDp(props) {
  if(props.picurl === ""){
    return (
      <div className='profile'>
        <Link to = {props.sangha === false? `/userprofile/${props.uid}`:`/Sanghaprofile/${props.uid}`} className='npm'>
          <div className='dp'>
            <h2 className='firstletter'>{props.name.split('')[0]}</h2>
            {/* <img className='dp' src= {props.picurl} alt="Girl in a jacket"/> */}
          </div>
          <div className='namedata213'>
            <div className='name'><h4 className='n123'>{props.name}</h4></div>
            <div className='nameid'><span className='nameid'><h4 className='n1234'>ID: {props.nameid}</h4></span></div>
          </div>
        </Link>
      </div>
    )
  }else{
    return (
      <div className='profile'>
        <Link to = {props.sangha === false? `/userprofile/${props.uid}`:`/sanghaprofile/${props.uid}`} className='npm'>
          <div className='dp'>
            <img className='dp' src= {props.picurl} alt="Girl in a jacket"/>
          </div>
          <div className='namedata213'>
            <div className='name'><h4 className='n123'>{props.name}</h4></div>
            <div className='nameid'><span className='nameid'><h4 className='n1234'>ID: {props.nameid}</h4></span></div>
          </div>
        </Link>
      </div>
      )
  }
}
