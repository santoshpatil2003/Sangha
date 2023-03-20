import React from 'react'
import './MiddleContainer.css'
import Textpost from './Textpost'

// const search = (searchc) => {
//       searchc();
// }

export default function MiddleContainer(props) {

  // const [se , sear] = useState(false); 

  return props.insidecontent === null?(
    <div className='middle'>
      <div className="Middlecontainer">
        {/* {props.insidecontent} */}
        <Textpost communityname = 'Beerbiceps' time = '21st Jan 2023'></Textpost>
        <Textpost communityname = 'Beerbiceps' time = '21st Jan 2023'></Textpost>
        <Textpost communityname = 'Beerbiceps' time = '21st Jan 2023'></Textpost>
        <Textpost communityname = 'Beerbiceps' time = '21st Jan 2023'></Textpost>
        <Textpost communityname = 'Beerbiceps' time = '21st Jan 2023'></Textpost>
        <Textpost communityname = 'Beerbiceps' time = '21st Jan 2023'></Textpost>
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
