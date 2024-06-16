import './List.css'
import TodoItem from './TodoItem'
import { useState } from 'react'

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

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
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
