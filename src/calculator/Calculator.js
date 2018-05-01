import React from 'react'

import TemperatureInput from './TemperatureInput'
import BoilingVerdict from "./BoilingVerdict"

//Function

const toCelsius = (fahrenheit) => (
    (fahrenheit-32)*5/9
)

const toFahrenheit = (celsius) => (
    (celsius*9/5)+32
)

const tryConvert = (temperature,convert) => {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

//Calculator

class Calculator extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            temperature: '',
            scale: 'c'
        }
    this.handleCelciusChange = this.handleCelciusChange.bind(this)
    this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this)
    }

    handleCelciusChange(temperature){
        this.setState({scale: 'c', temperature})
    }

    handleFahrenheitChange(temperature){
        this.setState({scale: 'f', temperature})
    }

    render(){
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
        const fahrenhet = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature

        return(
            <div>
                <TemperatureInput
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelciusChange}
                />
                <TemperatureInput
                    scale='f'
                    temperature={fahrenhet}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict
                    celcius={parseFloat(celsius)}
                />
            </div>
        )
    }
}

export default Calculator