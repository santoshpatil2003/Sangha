import React,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {
  Link,
  useNavigate,
} from "react-router-dom";
import './Profiledropdown.css'
import {signOut} from "firebase/auth";
import { auth } from "./Firebase";

export default function Profiledropdown(props) {
  let [signout2,dosignout] = useState(false)

  const nav = useNavigate();
  
  const signout = () => {
    signOut(auth);
    nav('/');
    dosignout(signout2 = !signout2);
    console.log("done");
  }

  if(props.picurl === ''){
    return (
      <Dropdown className='droptop'>
        <Dropdown.Toggle variant='tertery' className='drop'>
              <img className='u' src= {props.picurl} alt = "" onError = {() => {console.log("error img")}}/>
              {/* <div className='usa'></div> */}
              {/* <Link className='li' to='/'>
                  
              </Link> */}
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropmenu'>
             <div className='tebox'>
              <Link className='li' to='/SanghaSettings'>
                <h4 className='coltext'>Settings</h4> 
              </Link>
             </div>
              {/* <Dropdown.Item variant='tertery'>Settings</Dropdown.Item> */}
          
            <div className='tebox' role={'button'} onClick={signout}>
                <h4 className='coltext'>Log out</h4>
            </div>
              {/* <Dropdown.Item variant='tertery' >Log out</Dropdown.Item> */}
          
          {/* <Dropdown.Item href="#/action-2">Log out</Dropdown.Item> */}
          {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    );
  }else{
    return (
      <Dropdown className='droptop'>
        <Dropdown.Toggle variant='tertery' className='drop'>
              <img className='u' src= {props.picurl} alt="Girl in a jacket"/>
              {/* <Link className='li' to='/'>
                  
              </Link> */}
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropmenu'>
             <div className='tebox'>
              <Link className='li' to='/SanghaSettings'>
                <h4 className='coltext'>Settings</h4> 
              </Link>
             </div>
              {/* <Dropdown.Item variant='tertery'>Settings</Dropdown.Item> */}
          
            <div className='tebox' role={'button'} onClick={signout}>
                <h4 className='coltext'>Log out</h4>
            </div>
              {/* <Dropdown.Item variant='tertery' >Log out</Dropdown.Item> */}
          
          {/* <Dropdown.Item href="#/action-2">Log out</Dropdown.Item> */}
          {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}