import { useReducer, useRef, createContext } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'

export const DiaryStateContext = createContext()
export const DiaryDispatchContext = createContext()

function App() {
  const nav = useNavigate()
  const idRef = useRef(3)

  const mockData = [
    {
      id: 1,
      createDate: new Date('2024-06-17').getTime(),
      emotionId: 1,
      content: '1번일기 내용',
    },
    {
      id: 2,
      createDate: new Date('2024-06-16').getTime(),
      emotionId: 5,
      content: '2번일기 내용',
    },
    {
      id: 3,
      createDate: new Date('2024-05-16').getTime(),
      emotionId: 3,
      content: '3번일기 내용',
    },
  ]

  function reducer(state, action) {
    switch (action.type) {
      case 'CREATE':
        return [action.data, ...state]
      case 'UPDATE':
        return state.map((item) =>
          item.id === action.data.id ? action.data : item
        )
      case 'DELETE':
        return state.filter((item) => item.id !== action.data.id)
      default:
        return state
    }
  }

  const [data, dispatch] = useReducer(reducer, mockData)

  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createDate,
        emotionId,
        content,
      },
    })
  }

  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createDate,
        emotionId,
        content,
      },
    })
  }

  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      data: {
        id: id,
      },
    })
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
