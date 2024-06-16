import './TodoItem.css'
import { memo } from 'react'

const TodoItem = ({ id, isDone, content, date, onUpate, onDelete }) => {
  const onChangeCheckbox = () => {
    console.log(onUpate)
    onUpate(id)
  }
  const onClickButton = () => {
    onDelete(id)
  }
  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={isDone}
        onChange={onChangeCheckbox}
      ></input>
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickButton}>삭제</button>
    </div>
  )
}
// 두번째는 커스텀 하기 위한 함수 가능
export default memo(TodoItem)
