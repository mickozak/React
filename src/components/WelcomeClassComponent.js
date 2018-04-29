import React from 'react'

class WelcomeClassComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return <h1>Welcome Class! {this.props.name}</h1>
    }
}

export default WelcomeClassComponent

