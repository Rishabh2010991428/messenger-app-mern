import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChats from './SidebarChats';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-header'>
          <Avatar src="https://avatars.githubusercontent.com/u/78143404?v=4"/>
          <div className='sidebar-headerRight'>
            <IconButton>
              <DonutLargeIcon/>
            </IconButton>
            <IconButton>
              <ChatIcon/>
            </IconButton>
            <IconButton>
              <MoreVertIcon/>
            </IconButton>
          </div>
        </div>
        <div className='sidebar-search'>
            <div className='sidebar-searchContainer'>
                <SearchIcon/>
                <input placeholder='Search or start new chat' type="text"/>
            </div>
        </div>
        <div className='sidebar-chats'>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
        </div>
    </div>
  )
}

export default Sidebar