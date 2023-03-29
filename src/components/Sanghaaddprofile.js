import React from 'react'
import './Sanghaaddprofile.css'
import { VscAdd } from "@react-icons/all-files/vsc/VscAdd";

export default function Sanghaaddprofile(props) {

    if(props.add === true){
        return (
            <div className='addsangha'>
                  <div className='addcircle'>
                    <VscAdd className='addcircleinside' size={30}></VscAdd>
                  </div>
            </div>
          ) 
    }else{
        return (
            <div className='addsangha'>
                  <div className='addcircle'></div>
            </div>
          ) 
    }
}
