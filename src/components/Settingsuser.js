import React,{useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ChangeComponent from './ChangeComponent';
import './Settings.css';
// import Button from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import { Switch } from 'node_modules\@mui\material\Switch';
// import Switch from "react-switch";

export default function Settingsuser(props) {
    let [check , checked] = useState();
    return (
        <div className='settingsbody'>
            <div className='heading'><h3>Settings</h3></div>
            <div className='drop'>
                <Accordion>
                    <Accordion.Item className='accitem' eventKey="0">
                        <Accordion.Header>Name</Accordion.Header>
                        <Accordion.Body className='accitembody'>
                            <ChangeComponent password = {false} data = "Santosh Patil" dataname = "Enter new name"></ChangeComponent>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='accitem' eventKey="1">
                        <Accordion.Header>Change your Password</Accordion.Header>
                        <Accordion.Body>
                            <ChangeComponent password = {true} dataname = "Enter old password" dataname2 = "Enter new password"></ChangeComponent>
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item className='accitem' eventKey="2">
                        <Accordion.Header>Cost/Month</Accordion.Header>
                        <Accordion.Body>
                            <ChangeComponent password = {false} data = "250 Rs" dataname = "Enter new amount"></ChangeComponent>
                        </Accordion.Body>
                    </Accordion.Item> */}
                    <Accordion.Item className='accitem' eventKey="3">
                        <Accordion.Header>Profile Picture</Accordion.Header>
                        <Accordion.Body className='accitembody'>
                            <ChangeComponent picurl = {props.picurl}></ChangeComponent>
                        </Accordion.Body>
                    </Accordion.Item>
                    <div className='accitem2'>
                        <div className='header'><h4>Black theme</h4></div>
                        <div className='switch'>
                            <Switch className='sw'></Switch>
                        </div>
                    </div>
                    {/* <Accordion.Item className='accitem' eventKey="4">
                        <Accordion.Header>Black theme</Accordion.Header>
                        <Accordion.Body>
                            <div className='switch'>
                                <Switch></Switch>
                            </div>
                            <ChangeComponent password = {false} data = "400" dataname = "Enter new amount of members"></ChangeComponent>
                        </Accordion.Body>
                    </Accordion.Item> */}
                </Accordion>
            </div>
        </div>
    )
}