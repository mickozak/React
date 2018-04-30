import React from 'react'

const NumberList = (props) => {

    const numbers = props.number
    const listItems = numbers.map((value) => <li key={value.id}>{value}</li>)
    console.log(listItems)
    return(
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default NumberList