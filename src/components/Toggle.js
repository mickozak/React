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

class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isToggleOn: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
            })
        )
    }

    render(){
        return(
            <div>
                <h1>Button ON/OFF</h1>
                <button onClick={this.handleClick} style={styles.btn}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}

export default Toggle