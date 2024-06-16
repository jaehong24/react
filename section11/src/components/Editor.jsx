import './Editor.css'
import { useState, useRef, useContext } from 'react'
import { TodoDispatchContext } from '../App'

const Editor = () => {
  // 컨택스트 사용하기
  const { onCreate } = useContext(TodoDispatchContext)
  const [content, setContent] = useState('')
  const contentRef = useRef()

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onsubmit()
    }
  }

  const onsubmit = () => {
    if (content === '') {
      contentRef.current.focus()
      console.log(contentRef.current)
      return
    }
    onCreate(content)
    setContent('')
  }

  return (
    <div className="Editor">
      <input
        onKeyDown={onKeyDown}
        ref={contentRef}
        type="text"
        onChange={onChangeContent}
        value={content}
        placeholder="새로운 Todo..."
      ></input>
      <button onClick={onsubmit}>추가</button>
    </div>
  )
}

export default Editor
