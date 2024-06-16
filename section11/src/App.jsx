import {
  useState,
  useEffect,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
} from 'react'
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

// 리랜더링시 컨텍스트가 다시 생성 되는걸 방지하기 위해 컴포넌트 위에 선언
// export const TodoContext = createContext()
export const TodoStateContext = createContext()
export const TodoDispatchContext = createContext()

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

  // const onUpate = (targetId) => {
  //   // todoes State의 값들 중에
  //   // setTodos(
  //   //   todos.map((todo) =>
  //   //     todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
  //   //   )
  //   // )
  //   // targetId와 일치하는 id를 갖는 투두 아이템의 isDone으로 변경
  // }

  const onUpate = useCallback((targetId) => {
    dispatch({ type: 'UPDATE', targetId: targetId })
  }, [])

  // const onDelete = (targetId) => {
  //   // setTodos(todos.filter((todo) => todo.id !== targetId))
  // }

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    })
  }, [])
  // const func =

  const memoizedDispatch = useMemo(() => {
    return { onDelete, onCreate, onUpate }
  }, [])
  return (
    <>
      <div className="App">
        <Header />
        {/* 이렇게 하면 provider 사이에 있는 컴포넌터들은 공급받을수 있다.  */}
        <TodoStateContext.Provider value={todos}>
          <TodoDispatchContext.Provider value={memoizedDispatch}>
            <Editor></Editor>
            <List></List>
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </div>
    </>
  )
}

export default App
