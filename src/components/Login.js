import React from 'react'

class Login extends React.Component{
    constructor(){
        super()
        this.one = this.one.bind(this)
        this.two = this.two.bind(this)
        this.state = {
            inLoggedIn: false
        }
    }

    one(){
        this.setState({
            isLoggedIn: true
        })
    }

    two(){
        this.setState({
            isLoggedIn: false
        })
    }

    render(){
        const inLoggedIn = this.state.inLoggedIn
        return(
            <div>
                <h1>Login User (Inline If-Else with Conditional Operator)</h1>
                <h2>The user is {inLoggedIn ? 'currently' : 'not'} logged in.</h2>
            </div>
        )
    }
}

export default Login