import React, { useState , useEffect } from 'react'
import SanghaPopup from './SanghaPopup';
import './SanghaProfileMiddle.css'
import JoinCost from './JoinCost.js'
import {getsanghadata , gettweets} from './profiledata'
import Textpost from './Textpost'
import { totalmembers } from './profiledata';
import { useruid } from './profiledata';


export default function SanghaProfileMiddle(props) {
    let [totalmem,totalmember] = useState();
    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    let [uid,uids] = useState(false);
    let [sanghauser, sanghadata] = useState({});
    let [tweet, tweets] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        getsanghadata(props.uid,sanghadata,sanghauser);
        gettweets(tweet,tweets,props.uid);
        console.log(tweet);
        useruid(uid,uids,props.uid);
        console.log(uid);
        console.log(props.uid);
        if(props.sangha === true){
            totalmem = totalmembers(props.uid,totalmem,totalmember);
        }
    },[])
    console.log(sanghauser.sanghaname);
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
                                <img className='postdp22' src="https://pbs.twimg.com/profile_images/1414874230794031105/dL_AxaaQ_400x400.jpg" alt="Girl in a jacket"/>
                            </div>
                            <div className='named'>
                                <div className='na2'><h4 className='name212'>{sanghauser.sanghaname}</h4></div>
                                <div className='iddata2'><span className='idspan212'><h4 className='name212'>{sanghauser.foundername}</h4></span></div>
                            </div>
                        </div>
                        { props.sangha === true && props.user === true?<div className='joinbutton'>{`${totalmem}`}</div> :<button className='joinbutton' onClick={() => setModalShow(true)}>Join</button>}
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
                    {props.sangha === true && props.user === false?<JoinCost uid = {props.uid} sanghaname = {props.name} foundername = {props.nameid} show={modalShow} onHide={() => setModalShow(false)}></JoinCost>:<div></div>}
                </div>
                <div className='bottompost'>
                    {tweet.map((d , index) => {
                         return (
                                <div className='tw' key={index}>
                                    <Textpost user = {uid} communityname = {d['sanghaname']} time = {d['date']} heading = {d['heading']} body = {d['body']}></Textpost>
                                </div>
                        );
                    })}
                </div>
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
