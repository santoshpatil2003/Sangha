import React from 'react'
import './community.css'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import NavSignUp from './NavSignUp';

export default function Community() {
    const [ref2 , inView2] = useInView();
    const href2 = window.location.href;
    console.log(href2);
  return (
    <div className='fullbody2'>
        <NavSignUp></NavSignUp>
        <div className='bodypage3'>
          <div className='center'>
            <h1>Hey Creators welcome to Sangha</h1>
            <h2 className='text'>Create your Sangha{inView2}</h2>
            <div className='loginbutton1'>
                <Link to='communitysignup'>
                    <button>Let's Build it</button>
                </Link>
            </div>
          </div>
        </div>
            <div className='bottom2' >
                <motion.div className='head25' ref={ref2} animate={{x: inView2?160:0, opacity: inView2? 1:0 }} initial = {{opacity: 0}} transition={{duration:0.5}}>
                    <h2>We help you to convert your audience into a<div className='subtext21'>Sangha.</div></h2>
                </motion.div>
                <motion.div className='subtext2' ref={ref2} animate={{x: inView2? 510:0, opacity: inView2? 1:0 }} initial = {{opacity: 0}} transition={{duration:0.5}}>
                    <h2>Just Build It.</h2>
                </motion.div>
            </div>
        </div> 
  )
}

