import React from 'react'

const styles = {
    margin: '20px'
}


class NameForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: '',
            textarea: '',
            select: 'Poland'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeTextArea = this.handleChangeTextArea.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
    }


    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleChangeTextArea(event){
        this.setState({textarea: event.target.textarea})
    }

    handleChangeSelect(event){
        this.setState({select: event.target.select})
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} style={styles}>
                <label>
                    <br/>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>
                    <br/>
                    <br/>
                    Text:
                    <br/>
                    <br/>
                    <textarea value={this.state.textarea} onChange={this.handleChangeTextArea}/>
                </label>
                <br/>
                <br/>
                <label>
                    Where are you from?
                    <select value={this.state.select} onChange={this.handleChangeSelect}>
                        <option value="grapefruit">England</option>
                        <option value="lime">Germany</option>
                        <option value="coconut">Poland</option>
                        <option value="mango">Spain</option>
                    </select>
                </label>
                <br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default NameForm