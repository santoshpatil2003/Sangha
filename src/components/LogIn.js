import React from 'react'

import './LogIn.css';
// import NavSignUp from './components/NavSignUp';
import LogInBox from './LogInBox';
import NavSignUp from './NavSignUp';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"

export default function LogIn() {
  const [ ref, inView] = useInView();
  return (
    <div className='fullbody'>
      <NavSignUp></NavSignUp>
      {/* <div className='custom-shape-divider-bottom-1675611468'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className='shape-fill'></path>
        </svg>
      </div> */}
      <div className='bodypage2'>
        <div className='left20'>
          <h1 className='left20-h1'>Welcome To Sangha</h1>
        </div>
        <div className='right20'>
          <LogInBox></LogInBox>
        </div>
      </div>
      {/* <div className='curve'></div> */}
      <div className='bottom'>
          <motion.div className='headtop' ref={ref} animate={{x: inView?80:0, opacity: inView? 1:0 }} initial = {{opacity: 0}} transition={{duration:0.5}}>
            <h2>What is <span className='subtext'>Sangha?</span></h2>
            <h4>Sangha is a Sanskrit word which basically means community, Sangha platform will help you to connect with your favourite content creator and interact with them.</h4>
            {/* <h2>Now you can get connect with your favourite <div className='subtext'>content creator.</div></h2> */}
          </motion.div>
          <motion.div className='head' ref={ref} animate={{x: inView?130:0, opacity: inView? 1:0 }} initial = {{opacity: 0}} transition={{duration:0.5}}>
            <h2>Now you can get connect with your favourite <div className='subtext'>content creator.</div></h2>
          </motion.div>
          <motion.div className='head' ref={ref} animate={{x: inView?130:0, opacity: inView? 1:0 }} initial = {{opacity: 0}} transition={{duration:0.5}}>
            <h2>Don't miss a chance to be a precious member of<div className='subtext'>precious Sangha.</div></h2>
          </motion.div>
      </div>
      </div>
  )
}
