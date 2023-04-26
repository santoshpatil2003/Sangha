import React from 'react'
import './Sanghaaddprofile.css'
import { VscAdd } from "@react-icons/all-files/vsc/VscAdd";

export default function Sanghaaddprofile(props) {

    if(props.add === true){
        return (
            <div className='addsangha'>
                  <div className='addcircle21'>
                    <VscAdd className='addcircleinside' size={30}></VscAdd>
                  </div>
            </div>
          ) 
    }else{
        return (
            <div className='addsangha'>
                <div className='addcircle'>{props.picurl === ( undefined || null || "" )?<div className='addcircle'>{props.sanghaname.split('')[0]}</div>:<img src = {`${props.picurl}`} alt='error'/>}</div>
            </div>
          ) 
    }
}
