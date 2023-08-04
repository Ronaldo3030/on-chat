import './Input.css'

const Input = ({ value, type, showSearch, placeholder, onChange }) => {
  return (
    <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} type={type} className={`input-search ${showSearch ? 'show' : ''}`} />
  )
}

export default Input