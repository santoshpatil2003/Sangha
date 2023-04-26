import React, {useState,useEffect} from 'react';
import './LeftContainer.css';
import Sanghaaddprofile from './Sanghaaddprofile';
import { listjoinedsangha } from './profiledata';

export default function LeftContainer() {
  let [lists,list] = useState([]);
  useEffect(()=>{
    listjoinedsangha(lists,list)
    // .then((x)=>{
    //     list(lists = x)
    // });
      // list(lists = listjoinedsangha());
  },[])
  return (
    <div>
      <div className="Left-container">
        <Sanghaaddprofile add = {true}></Sanghaaddprofile>
        <div className='sanghalists2122'>
          { 
          lists?.map((e)=>{
              return (
                <div className='ass' key={e['uid']}>
                    <Sanghaaddprofile sanghaname = {e['sanghaname']} picurl = {e['picurl']}  add = {false}></Sanghaaddprofile>
                </div>
              );
          })
          }
          {/* <Sanghaaddprofile add = {false}></Sanghaaddprofile>
          <Sanghaaddprofile add = {false}></Sanghaaddprofile>
          <Sanghaaddprofile add = {false}></Sanghaaddprofile>
          <Sanghaaddprofile add = {false}></Sanghaaddprofile> */}
        </div>
      </div>
    </div>
  )
}
