import React from 'react'
import NumberList from '../components/NumberList'

class ListItems extends React.Component{
    render(){


        const numbers = [1,2,3,4,5]
        const listItems = numbers.map((value)=><li>{value}</li>)
        console.log(listItems)


        return(
            <div>
                <h1>Lists - (Exercise - Rendering Multiple Components)</h1>
                <ul>
                    {listItems}
                </ul>
                <h2>Basic List Component</h2>
                <div>
                    <NumberList number={[1,2,3,4,5]}/>
                </div>
            </div>
        )
    }
}

export default ListItems

