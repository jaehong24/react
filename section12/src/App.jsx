import { useReducer, useRef, createContext } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'

function App() {
  const nav = useNavigate()
  const idRef = useRef(3)

  const mockData = [
    {
      id: 1,
      createDate: new Date().getTime(),
      emotionId: 1,
      content: '1번일기 내용',
    },
    {
      id: 2,
      createDate: new Date().getTime(),
      emotionId: 2,
      content: '2번일기 내용',
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

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    })
  }

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
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

  const DiaryStateContext = createContext()
  const DiaryDispatchContext = createContext()

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
