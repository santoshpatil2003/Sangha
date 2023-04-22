import React,{useState , useEffect} from 'react'
import './MiddleContainer.css'
import Textpost from './Textpost'
import { gettweets } from './profiledata';

// const search = (searchc) => {
//       searchc();
// }

export default function MiddleContainer(props) {

  const [tw , tws] = useState([]); 

  useEffect(() => {
    gettweets(tw,tws);
  },[]);

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
        {tw.map((d , index) => {
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
