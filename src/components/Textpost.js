import React from 'react'
import './Textpost.css'

export default function Textpost(props) {
    return (
        <div className='textbox22'>
            <div className='layertop'>
                <div>
                    <div className='writerinfo'>
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
            <div className='layermiddle'>
                <p>
                    Dear Young Indians, 
                    India is the opportunity. Don't waste your parents money by going abroad to study. 
                    Some of u are going overseas just for fun to escape your families which is sad. Graduation & PG education is meaningless. 
                    Instead start a business in India & learn from YouTube.
                </p>
            </div>
            <div className='layerbottom'></div>
        </div>
    )
}
