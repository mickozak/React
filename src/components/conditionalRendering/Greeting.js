import React from 'react'
import GuestGreeting from '../conditionalRendering/GuestGreeting'
import UserGreeting from '../conditionalRendering/UserGreeting'

const Greeting = (props) => {

    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>
    }
        return <GuestGreeting/>
}

export default Greeting