import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import React, {useEffect, useState} from 'react'
import Pusher from 'pusher-js'
import axios from './components/axios'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() =>{
    axios.get("/messages/sync").then(res => {
      setMessages(res.data)
    })
  }, [])
  useEffect(()=>{
    const pusher = new Pusher('c7f9df435c12676138ae',{
      cluster: 'us2' 
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data)=>{
      setMessages([...messages, data])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])
  console.log(messages)

  return (
    <div className="App">
      <div className="App-body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}
export default App;
