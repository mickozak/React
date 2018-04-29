import React from 'react'
import LoginButton from '../conditionalRendering/LoginButton'
import LogoutButton from '../conditionalRendering/LogoutButton'
import Greeting from "./Greeting";

class LoginControl extends React.Component{
    constructor(props){
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state={
            isLoggedIn: false
        }
    }

    handleLoginClick(){
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogoutClick(){
        this.setState({
            isLoggedIn: false
        })
    }


    render(){

        const isLoggedIn = this.state.isLoggedIn

        const button = isLoggedIn ? (<LogoutButton onClick={this.handleLogoutClick}/>)
            :
            (<LoginButton onClick={this.handleLoginClick}/>)

        return(
            <div>
                <Greeting  isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}

export default LoginControl