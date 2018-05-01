import React from 'react'

import BoilingVerdict from "./BoilingVerdict";

const scaleNames = {
    c: 'Celcius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.onTemperatureChange(e.target.value)
    }

    render(){

        const temperature = this.props.temperature
        const scale = this.props.scale

        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />

                <BoilingVerdict celcius={parseFloat(temperature)}/>
            </fieldset>
        )
    }
}

export default  TemperatureInput