import './TodoItem.css'
import { memo } from 'react'
import { useContext } from 'react'
import { TodoDispatchContext } from '../App'

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpate, onDelete } = useContext(TodoDispatchContext)
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
