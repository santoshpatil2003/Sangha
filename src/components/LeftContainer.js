import React from 'react'
import './LeftContainer.css'
import Sanghaaddprofile from './Sanghaaddprofile'

export default function LeftContainer() {
  return (
    <div>
      <div className="Left-container">
        <Sanghaaddprofile add = {true}></Sanghaaddprofile>
        <div className='sanghalists2122'>
          <Sanghaaddprofile add = {false}></Sanghaaddprofile>
          <Sanghaaddprofile add = {false}></Sanghaaddprofile>
          <Sanghaaddprofile add = {false}></Sanghaaddprofile>
          <Sanghaaddprofile add = {false}></Sanghaaddprofile>
        </div>
      </div>
    </div>
  )
}
