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
    constructor(){
        super()
        this.state = {
            text: 'My name is Michael.'
        }
        this.change = () => this.setState({text: 'I am 25 years old.'})
    }

    render(){
        return(
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={this.change} style={styles.btn}>CHANGE</button>
            </div>
        )
    }
}

export default HandlingEvents