import React from 'react'

const styles = {
    btn: {
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#4FC3F7',
        color: '#FFFFFF'
    }
}

class HandlingEvents extends React.Component{
    constructor() {
        super()
        this.state = {
            text: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prev=>({
            text: !prev.text
        }))
    }

    render(){
        return(
            <div>
                <h1>
                    {this.state.text ? 'My name is Michael.' : 'I am 25 years old.'}
                </h1>
                <button onClick={this.handleClick} style={styles.btn}>CHANGE</button>
            </div>
        )
    }
}

export default HandlingEvents