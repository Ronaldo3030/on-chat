import './Message.css'

const Message = ({children, time, user}) => {
  return (
    <div className={`message ${user}`}>
      <p className="text">
        {children}
      </p>
      <span className="time">{time}</span>
    </div>
  )
}

export default Message