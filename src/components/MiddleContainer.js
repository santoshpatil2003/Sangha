import React,{useState , useEffect} from 'react'
import './MiddleContainer.css'
import Textpost from './Textpost'
import { db } from "./Firebase";
import { gettweets } from './profiledata';
import {onSnapshot, collection, orderBy,query} from "firebase/firestore";

// const search = (searchc) => {
//       searchc();
// }

export default function MiddleContainer(props) {

  let [tw , tws] = useState([]); 
  let [flag, flagship] = useState(1);

  useEffect(() => {
    const gettweets = async () => {
      const data = collection(db, "user", `${props.userid}/tweet`);
      try {
          const itemsQuery = query(data, orderBy('time'));
          const unsub = onSnapshot(itemsQuery,(s)=>{
          let l = [];
          s.forEach((m)=>{
              l.push(m.data());
              console.log(m.data());
          });
            console.log(l);
          tws(tw = l);
          // ftextlist(texts = l)
          console.log("added")
      });
          return () => {unsub()}
      } catch (error) {
          console.log(error);
      }
  }
  if(flag === 1){
    gettweets().then(()=>{
        if(tw.length === 0 ){
            flagship(flag = 1);
            gettweets();
        }
    })
    flagship(flag = 0);
}else{
    return;
}
    // gettweets(tw,tws,props.uid);
  },[tw]);

  return props.insidecontent === null?(
    <div className='middle'>
      <div className="Middlecontainer">
        {/* {props.insidecontent} */}
        {/* <Textpost communityname = 'Beerbiceps' time = '21st Jan 2023'></Textpost>
        <Textpost communityname = 'Beerbiceps' time = '21st Jan 2023'></Textpost>
        <Textpost communityname = 'Beerbiceps' time = '21st Jan 2023'></Textpost>
        <Textpost communityname = 'Beerbiceps' time = '21st Jan 2023'></Textpost>
        <Textpost communityname = 'Beerbiceps' time = '21st Jan 2023'></Textpost>
        <Textpost communityname = 'Beerbiceps' time = '21st Jan 2023'></Textpost> */}
        {tw?.map((d , index) => {
              return (
                  <div className='tw' key={index}>
                      <Textpost user = {false} communityname = {d['sanghaname']} time = {d['date']} heading = {d['heading']} body = {d['body']}></Textpost>
                  </div>
              );
        })}
      </div>
    </div>
  ):  (
    <div className='middle'>
      <div className="Middlecontainer">
        {props.insidecontent}
        {/* <Textpost communityname = 'Minecraft' time = '21st Jan 2023'></Textpost>
        <Textpost communityname = 'Minecraft' time = '21st Jan 2023'></Textpost> */}
        
      </div>
    </div>
  )
}
