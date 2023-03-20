import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ChangeComponent from './ChangeComponent';
import './Settings.css'

export default function Settings(props) {
    return (
        <div className='settingsbody'>
            <div className='heading'><h3>Settings</h3></div>
            <div className='drop'>
                <Accordion>
                    <Accordion.Item className='accitem' eventKey="0">
                        <Accordion.Header>Name of your sangha</Accordion.Header>
                        <Accordion.Body className='accitembody'>
                            <ChangeComponent password = {false} data = {props.name} firstnameletter = {props.name.slice(0,1)} dataname = "Enter new name"></ChangeComponent>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='accitem' eventKey="1">
                        <Accordion.Header>Change your Password</Accordion.Header>
                        <Accordion.Body>
                            <ChangeComponent password = {true} dataname = "Enter old password" dataname2 = "Enter new password"></ChangeComponent>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='accitem' eventKey="2">
                        <Accordion.Header>Cost/Month</Accordion.Header>
                        <Accordion.Body>
                            <ChangeComponent password = {false} data = "250 Rs" dataname = "Enter new amount"></ChangeComponent>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='accitem' eventKey="3">
                        <Accordion.Header>Logo</Accordion.Header>
                        <Accordion.Body className='accitembody'>
                            <ChangeComponent picurl = {props.picurl}></ChangeComponent>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='accitem' eventKey="4">
                        <Accordion.Header>Maximum member can join in sangha</Accordion.Header>
                        <Accordion.Body>
                            <ChangeComponent password = {false} data = "400" dataname = "Enter new amount of members"></ChangeComponent>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}
