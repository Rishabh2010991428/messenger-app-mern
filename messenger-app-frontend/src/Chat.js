import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import React, { useState } from 'react'
import "./Chat.css";
import axios from "./axios";
function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    // stops refresh
    e.preventDefault();

    await axios.post('/messages/new', {
      message: input,
      name: "You",
      timestamp: new Date().toUTCString(),
      received: true
    });
    setInput('');
  };

  return (
    <div className='chat'>
      <div className='chat-header'>
        <Avatar src='https://tse4.explicit.bing.net/th?id=OIP.AtrUvSeJKsIJe4AhQc9YSgHaHa&pid=Api&P=0' />
        <div className='chat-header-info'>
          <h3>CHITKARA UNIVERSITY</h3>
          <p>243 participants</p>
        </div>
        <div>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat-body'>
        {messages.map((message) => (
          <p className={`chat-message ${message.received && "chat-reciever"}`}>
            <span className='chat-name'>{message.name}</span>
            {message.message}
            <span className='chat-timestamp'>{message.timestamp}</span>
          </p>
        ))}


      </div>
      <div className='chat-footer'>
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message' type="text" />
          <button onClick={sendMessage} type='submit'>Send a message</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
        <IconButton>
          <CameraAltIcon />
        </IconButton>

      </div>
    </div>
  )
}
export default Chat