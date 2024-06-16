import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import './App.css'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '노래연습하기',
    date: new Date().getTime(),
  },
]

function App() {
  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(3)

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }
    setTodos([newTodo, ...todos])
  }

  const onUpate = (targetId) => {
    // todoes State의 값들 중에
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    )

    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone으로 변경
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId))
  }

  return (
    <>
      <div className="App">
        <Header />
        <Editor onCreate={onCreate}></Editor>
        <List todos={todos} onDelete={onDelete} onUpate={onUpate}></List>
      </div>
    </>
  )
}

export default App
