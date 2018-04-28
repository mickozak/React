import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WelcomeFunctionComponent from './components/WelcomeFunctionComponent'
import WelcomeClassComponent from './components/WelcomeClassComponent'


const App = (props) => (
    <div>
        <WelcomeFunctionComponent/>
        <WelcomeClassComponent/>
    </div>
)



export default App;
