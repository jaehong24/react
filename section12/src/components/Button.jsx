import './Button.css'

// props에 따라 각각 다르게 동작 하도록 만들 수 있다.
// text : 텍스트  type : 수정하기, 삭제하기, ...
const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  )
}

export default Button
