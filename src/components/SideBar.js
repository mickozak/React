import React from 'react'
import {Link} from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const SideBar = (props) => (
    <Drawer
        docked={false}
        onRequestChange={props.onRequestSideBarChange}
        open={props.isSideBarOpen}
    >
        <Link to={'/'}> <MenuItem>Home </MenuItem></Link>
        <Link to={'/welcomefunctioncomponent'}> <MenuItem>Function Component </MenuItem></Link>
        <Link to={'/welcomeclasscomponent'}> <MenuItem>Class Component </MenuItem></Link>
        <Link to={'/user'}> <MenuItem>User </MenuItem></Link>
        <Link to={'/clock'}> <MenuItem>Clock </MenuItem></Link>
        <Link to={'/counter'}> <MenuItem>Counter </MenuItem></Link>
        <Link to={'/handlingevents'}> <MenuItem>Handling Events </MenuItem></Link>
        <Link to={'/toggle'}> <MenuItem>Toggle </MenuItem></Link>
        <Link to={'/logincontrol'}> <MenuItem>Login Control </MenuItem></Link>
        <Link to={'/mailbox'}> <MenuItem>Mailbox </MenuItem></Link>
        <Link to={'/login'}> <MenuItem>Login </MenuItem></Link>
    </Drawer>
)

export default SideBar