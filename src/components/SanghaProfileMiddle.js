import React, { useState } from 'react'
import SanghaPopup from './SanghaPopup';
import './SanghaProfileMiddle.css'
import JoinCost from './JoinCost.js'

export default function SanghaProfileMiddle(props) {
    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                                <div className='na2'><h4 className='name212'>{props.name}</h4></div>
                                <div className='iddata2'><span className='idspan212'><h4 className='name212'>{props.nameid}</h4></span></div>
                            </div>
                        </div>
                        { props.sangha === true?<div className='joinbutton'>0/400</div> :<button className='joinbutton' onClick={() => setModalShow(true)}>Join</button>}
                    </div>
                </div>
                <div className='check'>
                    <div className='checkin'>
                        {props.sangha === true? <button className='addbutton' onClick={handleShow}>Add</button>:<div></div>}
                    </div>
                </div>
                <div className='mo'>
                    <SanghaPopup handleClose = {handleClose} handleShow = {handleShow} show = {show}></SanghaPopup>
                </div>
                <div className='no'>
                    <JoinCost sanghaname = 'Beerbiceps' foundername = 'Ranveer Allahbadia' show={modalShow} onHide={() => setModalShow(false)}></JoinCost>
                </div>
            </main>
            {/* <div className='demo'></div> */}

        </div>
    )
}
