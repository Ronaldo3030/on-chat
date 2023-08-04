import './Home.css'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import CardChat from '../../Components/CardChat'
import { Link } from 'react-router-dom'
import { useChat } from '../../Components/ChatContext/ChatContext.js';
import { useState } from 'react'
import Input from '../../Components/Input'

const Home = (props) => {
  const { setSelectedChat } = useChat();

  const allChats = [
    {
      name: "groundsheetsTardies",
      lastText: "asdasdasd",
      time: "3:50 PM",
      image: "https://static4.depositphotos.com/1000824/337/i/450/depositphotos_3379507-stock-photo-man-in-sunglasses.jpg",
      new: true
    },
    {
      name: "analogsThermophiles",
      lastText: "Loremasdasdasdasd",
      time: "4:23 PM",
      image: "https://github.com/ronaldo3030.png",
      new: true
    },
    {
      name: "outworksExtemporisations",
      lastText: "asdasdasd",
      time: "5:33 PM",
      image: "https://st.depositphotos.com/1032561/1364/i/600/depositphotos_13647537-stock-photo-close-up-portrait-of-a.jpg"
    },
    {
      name: "prattsIncorrigiblenesses",
      lastText: "asdasdasd",
      time: "1:44 AM",
      image: "https://st2.depositphotos.com/1854227/6338/i/600/depositphotos_63380655-stock-photo-woman-in-white-hat-laughing.jpg"
    },
    {
      name: "mirkSabirs",
      lastText: "asdasdasd",
      time: "5:11 AM",
      image: "https://st4.depositphotos.com/32284620/38100/i/600/depositphotos_381001306-stock-photo-indoor-portrait-brazilian-young-female.jpg"
    },
    {
      name: "dickedAtomizations",
      lastText: "asdasdasd",
      time: "9:322 PM",
      image: "https://st2.depositphotos.com/1912933/9153/i/600/depositphotos_91532262-stock-photo-beautiful-young-girl-on-a.jpg"
    },
    {
      name: "macrocycleAdmissibilities",
      lastText: "asdasdasd",
      time: "3:50 PM",
      image: "https://st.depositphotos.com/1004384/2579/i/600/depositphotos_25794457-stock-photo-beautiful-teen-girl-portrait.jpg"
    },
  ]

  const [filterChat, setFilterChat] = useState('All')
  const [chats, setChats] = useState([
    {
      name: "groundsheetsTardies",
      lastText: "asdasdasd",
      time: "3:50 PM",
      image: "https://static4.depositphotos.com/1000824/337/i/450/depositphotos_3379507-stock-photo-man-in-sunglasses.jpg",
      new: true
    },
    {
      name: "analogsThermophiles",
      lastText: "Loremasdasdasdasd",
      time: "4:23 PM",
      image: "https://github.com/ronaldo3030.png",
      new: true
    },
    {
      name: "outworksExtemporisations",
      lastText: "asdasdasd",
      time: "5:33 PM",
      image: "https://st.depositphotos.com/1032561/1364/i/600/depositphotos_13647537-stock-photo-close-up-portrait-of-a.jpg"
    },
    {
      name: "prattsIncorrigiblenesses",
      lastText: "asdasdasd",
      time: "1:44 AM",
      image: "https://st2.depositphotos.com/1854227/6338/i/600/depositphotos_63380655-stock-photo-woman-in-white-hat-laughing.jpg"
    },
    {
      name: "mirkSabirs",
      lastText: "asdasdasd",
      time: "5:11 AM",
      image: "https://st4.depositphotos.com/32284620/38100/i/600/depositphotos_381001306-stock-photo-indoor-portrait-brazilian-young-female.jpg"
    },
    {
      name: "dickedAtomizations",
      lastText: "asdasdasd",
      time: "9:322 PM",
      image: "https://st2.depositphotos.com/1912933/9153/i/600/depositphotos_91532262-stock-photo-beautiful-young-girl-on-a.jpg"
    },
    {
      name: "macrocycleAdmissibilities",
      lastText: "asdasdasd",
      time: "3:50 PM",
      image: "https://st.depositphotos.com/1004384/2579/i/600/depositphotos_25794457-stock-photo-beautiful-teen-girl-portrait.jpg"
    },
  ])
  const [showSearch, setShowSearch] = useState(false)

  const changeChat = (value) => {
    setFilterChat(value)

    if (value === 'All') {
      setChats(allChats)
    } else if (value === 'Unread') {
      setChats(allChats.filter(chat => chat.new))
    } else {
      setChats(allChats.filter(chat => !chat.new))
    }
  }

  const filterChatName = (name) => {
    changeChat('All')
    if(name){
      setChats(allChats.filter(chat => chat['name'].includes(name)))
    }else{
      setChats(allChats)
    }
  }

  return (
    <div className='container'>
      <div className="container-header">
        <div className='icons'>
          <HiOutlineMenuAlt1 size={24} cursor={'pointer'} />
          <div className='search'>
            <Input onChange={filterChatName} type="text" showSearch={showSearch ? 'show' : ''} placeholder="Search for user" />
            <BiSearch onClick={() => setShowSearch(!showSearch)} size={24} cursor={'pointer'} />
          </div>
        </div>
        <ul className="list-types">
          <li className={filterChat === 'All' ? 'selected' : ''} onClick={() => changeChat('All')}>All</li>
          <li className={filterChat === 'Unread' ? 'selected' : ''} onClick={() => changeChat('Unread')}>Unread</li>
          <li className={filterChat === 'Read' ? 'selected' : ''} onClick={() => changeChat('Read')}>Read</li>
        </ul>
      </div>
      <div className="container-chats">
        <div className="chats">
          {chats.map((chat, index) => (
            <Link
              to={`/chat`}
              key={index}
              onClick={() => setSelectedChat(chat)}
            >
              <CardChat
                newMessage={chat.new}
                name={chat.name}
                lastText={chat.lastText}
                time={chat.time}
                image={chat.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home