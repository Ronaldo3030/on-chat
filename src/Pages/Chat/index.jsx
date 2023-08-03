import './Chat.css'
import { IoIosArrowBack } from 'react-icons/io'
import { BiSend } from 'react-icons/bi'
import Message from '../../Components/Message'
import io from "socket.io-client";
import { useState } from 'react';

const socket = io.connect('http://localhost:3001')

const Chat = (props) => {
  const [message, setMessage] = useState('');

  const getMessage = (e) => {
    setMessage(e.target.value)
  }

  const sendMessage = (e) => {
    socket.emit('send_message', { message })
  }

  return (
    <div className='container-chat'>
      <div className="header-chat">
        <IoIosArrowBack size={24} color='#7e1ed7' cursor='pointer' />
        <div className="infos-user">
          <img src="https://github.com/ronaldo3030.png" alt="" />
          <div className="text-user">
            <h4 className='name'>Name user</h4>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </div>
      <div className="messages">
        <Message time='02:58 PM' user="me">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum distinctio repudiandae voluptate maxime optio voluptas sit provident nam libero eveniet quisquam qui dolore aspernatur ullam fugit, earum error at. Omnis?
        </Message>
      </div>
      <div className="input-chat">
        <input onChange={getMessage} type="text" placeholder='Type your message...' />
        <BiSend onClick={sendMessage} className='icon' size={24} cursor='pointer' />
      </div>
    </div>
  )
}

export default Chat