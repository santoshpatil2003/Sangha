import React, { useState , useEffect } from 'react'
import SanghaPopup from './SanghaPopup';
import './SanghaProfileMiddle.css'
import JoinCost from './JoinCost.js'
import {getsanghadata , getsanghatweets} from './profiledata'
import Textpost from './Textpost'
import { totalmembers } from './profiledata';
import { useruid } from './profiledata';
import { joined } from './profiledata';
import Sanghagettweet from './Sanghagettweet';


export default function SanghaProfileMiddle(props) {
    let [totalmem,totalmember] = useState();
    let [joined2,join2] = useState(false);
    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    let [uid,uids] = useState(false);
    // let [sanghauser, sanghadata] = useState({});
    // let [tweet, tweets] = useState([]);
    let [flag, flagship] = useState(1);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        let mount = true;
        if(mount === true){
            // getsanghadata(props.uid,sanghadata,sanghauser);
            // console.log(props.uid);
            // getsanghatweets(tweet,tweets,props.uid);
            // console.log(tweet);
            useruid(uid,uids,props.uid);
            joined(joined2,join2,props.uid)
            flagship(flag = 0);
            if(props.sangha === true){
                totalmem = totalmembers(props.uid,totalmem,totalmember);
            }
        }
        // console.log(joined2);
        return () => {
            mount = false;
            flagship(flag = 1);
        }
    },[])
    console.log(props.userdata.sanghaname);
    return (
        <div className='middlebox2'>
            <main>
                <div className='toppost2'>
                    <div className='userpost2'>
                        <img className='userpost22' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMqx33BLYo10cyCkA5Tc-4qt4rjx7zjreX-p7pmKlYknQZHT0W0HKS0wIqSfDodJoAgw&usqp=CAU" alt="Girl in a jacket"/>
                    </div>
                    <div className='usernamedp2'>
                        <div className='usernamedp21'>
                            <div className='postdp2'>
                               {props.picurl === (undefined || null || "")?<div className='dp123'>{props.userdata.sanghaname?.split('')[0]}</div>:<img className='postdp22' src = {`${props.picurl}`} alt="Girl in a jacket"/>}
                            </div>
                            <div className='named'>
                                <div className='na2'><h4 className='name212'>{props.userdata.sanghaname}</h4></div>
                                <div className='iddata2'><span className='idspan212'><h4 className='name212'>{props.userdata.foundername}</h4></span></div>
                            </div>
                        </div>
                        { props.sangha === true && props.user === true?<div className='joinbutton'>{`${totalmem}`}</div>: joined2 === true? <button className='joinbutton' onClick={() => setModalShow(true)}>Leave</button>  :<button className='joinbutton' onClick={() => setModalShow(true)}>Join</button>}
                    </div>
                </div>
                <div className='check'>
                    <div className='checkin'>
                        {props.sangha === true && props.user === true? <button className='addbutton' onClick={handleShow}>Add</button>:<div></div>}
                    </div>
                </div>
                <div className='mo'>
                    <SanghaPopup handleClose = {handleClose} handleShow = {handleShow} show = {show}></SanghaPopup>
                </div>
                <div className='no'>
                    {(props.sangha === true && props.user === false && joined2 === false)?<JoinCost joined = {joined2} joins = {join2} uid = {props.uid} sanghaname = {props.name} join = {false} foundername = {props.nameid} show={modalShow} onHide={() => setModalShow(false)}></JoinCost>: (props.sangha === true && props.user === false && joined2 === true)? <JoinCost uid = {props.uid} joined = {joined2} joins = {join2} sanghaname = {props.name} foundername = {props.nameid} show={modalShow} onHide={() => setModalShow(false)}></JoinCost>:<div></div>}
                </div>
                <Sanghagettweet userid = {props.uid}></Sanghagettweet>
            </main>
            {/* <div className='demo'></div> */}
            {/* <div className='bottompost'>
                {tweet.map((d , index) => {
                   return (
                        <div className='tw' key={index}>
                            <Textpost communityname = {d['sanghaname']} time = {d['date']} heading = {d['heading']} body = {d['body']}></Textpost>
                        </div>
                   )
                })}
            </div> */}
        </div>
    )
}
