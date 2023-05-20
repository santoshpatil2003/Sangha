import React,{useState,useEffect} from 'react'
import './Texts.css'
import { useruid } from './profiledata'

export default function Texts(props) {
    let friend = {borderRadius: "20px 5px 20px",justifyContent:"flex-end"}
    let me = {borderRadius: "5px 20px 5px",justifyContent:"flex-start"}
    let friend2 = {justifyContent:"flex-end"}
    let me2 = {justifyContent:"flex-start"}
    let [ui,uids] = useState(false)
    useEffect(()=>{
        useruid(ui,uids,props.uid);
    },[])
    // console.log(ui)
  return (
    <div className='text' style={ui?me2:friend2}>
      <div className='textinside' style={ui?me:friend}>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
