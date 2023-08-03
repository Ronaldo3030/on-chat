import './CardChat.css'

const CardChat = ({ name, lastText, time, image, newMessage }) => {
  return (
    <div className={`card-chat ${newMessage ? 'new-message' : ''}`}>
      <div className='image'>
        <img src={image} alt="" />
      </div>
      <div className='infos'>
        <div>
          <h3 className='name'>{name}</h3>
          <p className='message'>{lastText}</p>
        </div>
        <div className="left">
          <span className='time'>{time}</span>
          <span className="num-messages">3</span>
        </div>
      </div>
    </div>
  )
}

export default CardChat