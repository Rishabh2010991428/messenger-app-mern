import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import React from 'react'
import "./Chat.css";
function Chat() {
  return (
    <div className='chat'>
        <div className='chat-header'>
          <Avatar src='https://tse2.mm.bing.net/th?id=OIP.OtLqKEL4eIvyiNSJZ4pT-wHaHa&pid=Api&P=0'/>
          <div className='chat-header-info'>
            <h3>Room name</h3>
            <p>Last seen at...</p>
          </div>
          <div>
            <IconButton>
              <SearchOutlined/>
            </IconButton>
            <IconButton>
              <AttachFile/>
            </IconButton>
            <IconButton>
              <MoreVert/>
            </IconButton>
          </div>
        </div>
        <div className='chat-body'>
            <p className='chat-message'>
            <span className='chat-name'>Rishabh Pandey</span>
            This is a message
            <span className='chat-timestamp'>{new Date().toUTCString()}</span>
            </p>
            <p className='chat-message chat-receiver'>
            <span className='chat-name'>Harsh Arora</span>
            This is a message
            <span className='chat-timestamp'>{new Date().toUTCString()}</span>
            </p>
        </div>
        <div className='chat-footer'>
            <IconButton>
              <InsertEmoticon/>
            </IconButton>
            <form>
              <input placeholder='Type a message'/>
              <button type='submit'>Send a message</button>
            </form>
            <IconButton>
            <MicIcon/>
            </IconButton>
            <IconButton>
              <CameraAltIcon/>
            </IconButton>
            
        </div>
    </div>
  )
}
export default Chat