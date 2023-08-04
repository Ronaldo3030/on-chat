import './Chat.css'
import { IoIosArrowBack } from 'react-icons/io'
import { BiSend } from 'react-icons/bi'
import Message from '../../Components/Message'
import io from "socket.io-client";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useChat } from '../../Components/ChatContext/ChatContext.js';

const socket = io.connect('http://localhost:3001')

const Chat = (props) => {
  const { selectedChat } = useChat();

  const [message, setMessage] = useState('');

  const getMessage = (e) => {
    setMessage(e.target.value)
  }

  const sendMessage = (e) => {
    socket.emit('send_message', { message })
  }

  const convertDate = (dataHora) => {
    const dataHoraObj = new Date(dataHora);
    
    const dia = String(dataHoraObj.getDate()).padStart(2, '0');
    const mes = String(dataHoraObj.getMonth() + 1).padStart(2, '0');
    const ano = dataHoraObj.getFullYear();
    
    const horas = String(dataHoraObj.getHours()).padStart(2, '0');
    const minutos = String(dataHoraObj.getMinutes()).padStart(2, '0');
    
    const formatoConvertido = `${horas}:${minutos} de ${mes}/${dia}/${ano}`;
    return formatoConvertido;
}

  console.log(selectedChat)
  return (
    <div className='container-chat'>
      <div className="header-chat">
        <Link to='/'>
          <IoIosArrowBack size={24} color='#7e1ed7' cursor='pointer' />
        </Link>
        <div className="infos-user">
          <img src={selectedChat.image} alt="" />
          <div className="text-user">
            <h4 className='name'>{selectedChat.name}</h4>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </div>
      <div className="messages">
        {selectedChat.chat && selectedChat.chat.map((chat, index) => (
          <Message key={index} time={convertDate(chat.horario)} user={chat.remetente === selectedChat.name ? 'to' : 'me'}>
            {chat.mensagem}
          </Message>
        ))}
      </div>
      <div className="input-chat">
        <input onChange={getMessage} type="text" placeholder='Type your message...' />
        <BiSend onClick={sendMessage} className='icon' size={24} cursor='pointer' />
      </div>
    </div>
  )
}

export default Chat