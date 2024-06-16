import './List.css'
import TodoItem from './TodoItem'
import { useState, useMemo } from 'react'

const List = ({ todos, onUpate, onDelete }) => {
  const [search, setSearch] = useState('')

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getFilterdData = () => {
    if (search === '') {
      return todos
    }

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    )
  }

  const filteredTodoes = getFilterdData()

  const { totalCount, doneCount, noDoneCount } = useMemo(() => {
    const totalCount = todos.length
    const doneCount = todos.filter((todo) => todo.isDone).length
    const noDoneCount = totalCount - doneCount
    return {
      totalCount,
      doneCount,
      noDoneCount,
    }
  }, [todos])
  // 의존성 배열 : deps
  //  deps에 있는 배열이 바껴야지 콜백 함수 다시 실행

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>doneCount : {doneCount}</div>
        <div>noDoneCount : {noDoneCount}</div>
      </div>
      <input
        value={search}
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
      ></input>
      <div className="todos_wrapper">
        {filteredTodoes.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              onDelete={onDelete}
              {...todo}
              onUpate={onUpate}
            ></TodoItem>
          )
        })}
      </div>
    </div>
  )
}

export default List
