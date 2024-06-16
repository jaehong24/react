import './Editor.css'
import { useState, useRef } from 'react'

const Editor = ({ onCreate }) => {
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
