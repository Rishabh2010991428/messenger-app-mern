import { Avatar } from '@mui/material';
import React from 'react'
import "./SidebarChats.css";
function SidebarChats(props) {
  return (
    <div className='sidebarChat'>
        <Avatar id="sidebarChat-Avatar" src={props.url}/>
        <div className='sidebarChat-info'>
            <h2>{props.name}</h2>
            <p>This is the last message</p>
        </div>
    </div>
  )
}

export default SidebarChats