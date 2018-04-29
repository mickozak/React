import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
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
        <Router>
            <div>
                <Link to={'/'}> Home </Link>
                <Link to={'/welcomefunctioncomponent'}> Function Component </Link>
                <Link to={'/welcomeclasscomponent'}> Class Component </Link>
                <Link to={'/user'}> User </Link>
                <Link to={'/clock'}> Clock </Link>
                <Link to={'/counter'}> Counter </Link>
                <Link to={'/handlingevents'}> Handling Events </Link>
                <Link to={'/toggle'}> Toggle </Link>
                <Link to={'/logincontrol'}> Login Control </Link>
                <Link to={'/mailbox'}> Mailbox </Link>
                <Link to={'/login'}> Login </Link>

                <Route path={'/welcomefunctioncomponent'} render={() => (
                    <WelcomeFunctionComponent name={'Display the prop!'}/>
                )}/>
                <Route path={'/welcomeclasscomponent'} render={() => (
                    <WelcomeClassComponent name={'Display the prop!'}/>
                )}/>
                <Route path={'/user'} component={User} />
                <Route path={'/clock'} component={Clock} />
                <Route path={'/counter'} component={Counter} />
                <Route path={'/handlingevents'} component={HandlingEvents} />
                <Route path={'/toggle'} component={Toggle} />
                <Route path={'/logincontrol'} component={LoginControl} />
                <Route path={'/mailbox'} render={() => (
                    <Mailbox unreadMessages={messages}/>
                )}/>
                <Route path={'/login'} component={Login} />
            </div>
        </Router>
    </div>
)



export default App;
