import React from 'react'

import Name from '../components/usercomponents/Name'
import Age from '../components/usercomponents/Age'
import Phone from '../components/usercomponents/Phone'

const User = (props) => (

    <div>
        <h1>User - (Exercise - Extracting Components)</h1>
        <p>Name: <Name/></p>
        <p>Age: <Age/></p>
        <p>Phone: <Phone/></p>
    </div>


)

export default User