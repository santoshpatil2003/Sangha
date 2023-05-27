import React , {useState,useEffect} from 'react'
import './Textpost.css'
import {IoEllipsisVertical} from '@react-icons/all-files/io5/IoEllipsisVertical'
// import { Select } from '@mui/material'
import { useruid } from './profiledata';
import { deletetweet } from './profiledata'

export default function Textpost(props) {
    let [down , downs] = useState(false);
    let [uid,uids] = useState(false)
    useEffect(()=>{
        useruid(uid,uids,props.user);
        // console.log(props.user)
        // console.log(uid)
    })
    const delete2 = () => {
        // console.log(props.t);
        deletetweet(props.heading,props.body,props.time,props.t).then(()=>{
            console.log("deleted")
        });
        downs(down = !down);
    }
    return (
        <div className='textbox22'>
            <div className='layertop'>
                <div className='wdp'>
                    <div className='writerinfo'>
                        <div className='w'>
                            <div className='writerdp'>
                                <img className='writerdp' src="https://pbs.twimg.com/profile_images/1414874230794031105/dL_AxaaQ_400x400.jpg" alt="Girl in a jacket"/>
                            </div>
                            <div className='writernamebox'>
                                <div className='writername'>
                                    <div className='communityname'><h4 className='communityname'>{props.communityname}</h4></div>
                                </div>
                                <div className='writtendate'>
                                    <div className='time'><span className='nameid' ><h4 className='time'>{props.time}</h4></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                  uid? <div className='three'>
                        <IoEllipsisVertical onClick={() => {downs(down = !down)}}></IoEllipsisVertical>
                    </div>:
                    <div></div>
                }
            </div>
            {
                down? 
                <div className='DTOP'>
                    <div className='ddrop'>
                        <div className='dmenu' onClick={()=> {delete2()}} ><h4>Delete</h4></div>
                    </div>
                </div>:
                <div>

                </div>
            }
            <div className='layermiddle'>
                { props.heading === ''?
                    <p>
                        {props.body}
                    </p> :
                        <p>
                            {props.heading} 
                            <br></br>
                            {props.body}
                        </p>
                }
            </div>
            <div className='layerbottom'></div>
        </div>
    )
}
