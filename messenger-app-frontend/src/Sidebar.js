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
        {/* header */}
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
        {/* Search bar */}
        <div className='sidebar-search'>
            <div className='sidebar-searchContainer'>
                <SearchIcon/>
                <input placeholder='Search or start new chat' type="text"/>
            </div>
        </div>
        {/* sidebar chats component*/}
        <div className='sidebar-chats'>
            <SidebarChats name="CHITKARA UNIVERSITY" url="https://tse4.explicit.bing.net/th?id=OIP.AtrUvSeJKsIJe4AhQc9YSgHaHa&pid=Api&P=0"/>
            <SidebarChats name="NOTICE" url="https://tse4.mm.bing.net/th?id=OIP.CgHujB6FtEFHmObFqDJjVQHaES&pid=Api&P=0"/>
            <SidebarChats name="FAMILY GROUP" url="https://tse4.mm.bing.net/th?id=OIP.NIhRvAFmlgGQLNwo9SxbNAHaEn&pid=Api&P=0"/>
        </div>
    </div>
  )
}

export default Sidebar