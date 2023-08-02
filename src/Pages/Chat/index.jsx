import './Chat.css'
import { IoIosArrowBack } from 'react-icons/io'
import { BiSend } from 'react-icons/bi'

const Chat = (props) => {
  return (
    <div className='container-chat'>
      <div className="header-chat">
        <IoIosArrowBack size={24} color='#7e1ed7' cursor='pointer'/>
        <div className="infos-user">
          <img src="https://github.com/ronaldo3030.png" alt="" />
          <div className="text">
            <h4 className='name'>Name user</h4>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </div>
      <div className="messages">

      </div>
      <div className="input-chat">
        <input type="text" placeholder='Type your message...'/>
        <BiSend className='icon' size={24} cursor='pointer' />
      </div>
    </div>
  )
}

export default Chat