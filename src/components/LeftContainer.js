import React, {useState,useEffect} from 'react';
import './LeftContainer.css';
import Sanghaaddprofile from './Sanghaaddprofile';
import { listjoinedsangha } from './profiledata';
import { Link } from 'react-router-dom';

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
          lists?.map((e,index)=>{
              return (
                <Link key={index} className='ass2' to = {`/Sanghaprofile/${e['uid']}`}>
                  <div className='ass' key={index}>
                    <Sanghaaddprofile sanghaname = {e['sanghaname']} picurl = {e['picurl']}  add = {false}></Sanghaaddprofile>
                  </div>
                </Link>
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
