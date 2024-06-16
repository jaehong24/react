import { useState, useEffect, useRef, useReducer } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import Exam from './components/Exam'
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

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state]

    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      )
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId)

    default:
      return state
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData)
  // const [todos, setTodos] = useState(mockData)
  const idRef = useRef(3)

  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        idDone: false,
        content: content,
        date: new Date().getTime(),
      },
    })
  }

  const onUpate = (targetId) => {
    // todoes State의 값들 중에
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
    //   )
    // )
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone으로 변경
    dispatch({ type: 'UPDATE', targetId: targetId })
  }

  const onDelete = (targetId) => {
    // setTodos(todos.filter((todo) => todo.id !== targetId))
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    })
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
