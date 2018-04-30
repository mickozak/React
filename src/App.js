import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import AppBar from 'material-ui/AppBar'

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
import SideBar from './components/SideBar'
import ListItems from './components/ListItems'
import Blog from './components/Blog'
import NameForm from './components/NameForm'

const messages = ['React', 'Re: React', 'Re:Re: React'];

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

class App extends React.Component {
    state = {
              isDrawerOpen: false
        }
        drawerBtnClickHandler = () => this.setState({
           isDrawerOpen: !this.state.isDrawerOpen
        })

        render(){
                return(
                    <div>
                        <AppBar
                            title="React - Exercises - Open the menu"
                            onLeftIconButtonClick={this.drawerBtnClickHandler}
                        />
                        <Router>
                            <div>
                                <SideBar
                                    onRequestSideBarChange={this.drawerBtnClickHandler}
                                    isSideBarOpen={this.state.isDrawerOpen}
                                />

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
                                <Route path={'/listitems'} component={ListItems}/>
                                <Route path={'/blog'} render={() => (
                                    <Blog posts={posts}/>
                                )}/>
                                <Route path={'/nameform'} component={NameForm} />
                            </div>
                        </Router>
                    </div>
                )
        }
}

export default App;
