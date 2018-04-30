import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
    btn: {
        margin: '10px',
        fontSize: '10px'
    }
}

class Counter extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.minusBtnClick = () => this.setState({count: this.state.count-1})
        this.plusBtnClick = () => this.setState({count: this.state.count+1})
    }

    render(){
        return(
            <div>
                <h1>Counter - (Exercise - State - Material-UI)</h1>
                <h2>{this.state.count}</h2>
                <RaisedButton
                label={'-'}
                primary={true}
                onClick={this.minusBtnClick}
                style={styles.btn}
                />
                <RaisedButton
                label={'+'}
                primary={false}
                onClick={this.plusBtnClick}
                style={styles.btn}
                />
            </div>
        )
    }
}

export default Counter