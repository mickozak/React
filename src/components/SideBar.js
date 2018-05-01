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
        <Link to={'/user'}> <MenuItem>Extracting Components </MenuItem></Link>
        <Link to={'/clock'}> <MenuItem>State - 1 </MenuItem></Link>
        <Link to={'/counter'}> <MenuItem>State - 2</MenuItem></Link>
        <Link to={'/handlingevents'}> <MenuItem>Handling Events - 1 </MenuItem></Link>
        <Link to={'/toggle'}> <MenuItem>Handling Events - 2 </MenuItem></Link>
        <Link to={'/logincontrol'}> <MenuItem>Element Variables </MenuItem></Link>
        <Link to={'/mailbox'}> <MenuItem>In line if... </MenuItem></Link>
        <Link to={'/login'}> <MenuItem>Inline if-else...</MenuItem></Link>
        <Link to={'/listitems'}> <MenuItem>Lists </MenuItem></Link>
        <Link to={'/blog'}> <MenuItem>Keys </MenuItem></Link>
        <Link to={'/nameform'}> <MenuItem>Form </MenuItem></Link>
        <Link to={'/productdatatable'}> <MenuItem>App - Product Data Table</MenuItem></Link>
        <Link to={'/calculator'}> <MenuItem>App - Calculator</MenuItem></Link>
        <Link to={'/tictactoe'}> <MenuItem>Game - Tic Tac Toe</MenuItem></Link>

    </Drawer>
)

export default SideBar