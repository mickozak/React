import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WelcomeFunctionComponent from './components/WelcomeFunctionComponent'
import WelcomeClassComponent from './components/WelcomeClassComponent'
import User from './components/User'
import Clock from './components/Clock'
import Counter from './components/Counter'
import HandlingEvents from "./components/HandlingEvents";
import Toggle from "./components/Toggle"
import LoginControl from './components/conditionalRendering/LoginControl'
import Mailbox from './components/Mailbox'
import Login from './components/Login'


const messages = ['React', 'Re: React', 'Re:Re: React'];


const App = (props) => (
    <div>
        <WelcomeFunctionComponent name='Display the prop! - 1'/>
        <WelcomeFunctionComponent name='Display the prop! - 2'/>
        <WelcomeFunctionComponent name='Display the prop! - 3'/>
        <hr/>
        <WelcomeClassComponent name='Display the prop! - 1'/>
        <hr/>
        <User/>
        <hr/>
        <Clock/>
        <hr/>
        <Counter/>
        <hr/>
        <HandlingEvents/>
        <hr/>
        <Toggle/>
        <hr/>
        <LoginControl/>
        <hr/>
        <Mailbox unreadMessages={messages}/>
        <hr/>
        <Login/>
    </div>
)



export default App;
