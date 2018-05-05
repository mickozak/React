import React from 'react'

import User from './User'

class Fetch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
        this.componentDidMount=this.componentDidMount.bind(this)
    }

    componentDidMount(){
        fetch('https://randomuser.me/api?results=5')
            .then(response => response.json())
            .then(data=>this.setState({data}))
    }

    render(){
        return (
            <div>
                <h1>Data Fetch</h1>
                {this.state.data && this.state.data.results.map((user,index)=><User key={index} userData={user}/>)}
            </div>
        )
    }
}

export default Fetch