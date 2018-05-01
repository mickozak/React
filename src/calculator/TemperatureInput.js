import React from 'react'

import BoilingVerdict from "./BoilingVerdict";

const scaleNames = {
    c: 'Celcius',
    f: 'Fahrenheit'
}

function toCelsius(fahrenheit) {
    return (fahrenheit-32)*5/9
}

function toFahrenheit(celsius) {
    return (celsius*9/5)+32
}

function tryConvert(temperature,convert) {
    const input = parseFloat(temperature)
    if (Number.isNan(input)){
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output*1000)/1000
    return rounded.toString()
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