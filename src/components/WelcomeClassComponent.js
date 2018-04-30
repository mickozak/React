import React from 'react'

class WelcomeClassComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render() {

        return (
            <div>
                <h1>Welcome - (Exercise - Class Component)</h1>
                <h2>Welcome Class! {this.props.name}</h2>
            </div>
        )
    }
}

export default WelcomeClassComponent

