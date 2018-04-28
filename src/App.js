import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WelcomeFunctionComponent from './components/WelcomeFunctionComponent'
import WelcomeClassComponent from './components/WelcomeClassComponent'


const App = (props) => (
    <div>
        <WelcomeFunctionComponent name='Display the prop! - 1'/>
        <WelcomeFunctionComponent name='Display the prop! - 2'/>
        <WelcomeFunctionComponent name='Display the prop! - 3'/>
        <WelcomeClassComponent/>
    </div>
)



export default App;
