import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    axios.get('/messages/sync')
      .then((response) => {
        setMessages(response.data);
      })
      .catch(err => console.log(err))
  }, []);

  useEffect(()=>{
    const pusher = new Pusher('cf58539a60a53ccff600', {
      cluster: 'ap2',
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    // clean up function
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages]);

  // console.log(messages);

  return (
    <div className="app">
      <div className='app-body'>
      <Sidebar/>
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
