const Button = ({ text, color, children }) => {
  console.log(text)

  // 이벤트 객체(SyntheticBaseEvent)
  const onclickButton = (e) => {
    console.log(e)
    console.log(text)
  }
  return (
    <button
      onClick={onclickButton}
      // onMouseEnter={onclickButton}
      style={{ color: color }}
    >
      {text}-{color}
      {children}
    </button>
  )
}

// 기본 값 설정
Button.defaultProps = {
  color: 'BLACK',
}

export default Button
