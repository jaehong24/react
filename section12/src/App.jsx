// import './App.css'

// 컴포넌트
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import Button from './components/Button'
import Header from './components/Header'

// 리엑트
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Notfound from './pages/Notfound'

// 이미지
import { getEmotionImage } from './util/get-emotion-image'

// 라우트 경로
//  1. "/"  : 모든 일기를 조회하는 Home 페이지
//  2. "/new" : 새로운 일기를 작성하는 NEW 페이지
//  3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  // - 특정 이벤트가 발생 했을떄 페이지 이동 하게 하기 : usNavigate
  const nav = useNavigate()
  const onClickBtn = function () {
    nav('/new')
  }

  return (
    <>
      <Header
        title={'Header'}
        leftChild={<Button text={'Left'} />}
        rightChild={<Button text={'Right'} />}
      ></Header>

      <Button
        text={'123'}
        onClick={() => {
          console.log('123 버튼 클릭')
        }}
      />
      <Button
        text={'123'}
        type={'POSITIVE'}
        onClick={() => {
          console.log('123 버튼 클릭')
        }}
      />
      <Button
        text={'123'}
        type={'NEGATIVE'}
        onClick={() => {
          console.log('123 버튼 클릭')
        }}
      />

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/new" element={<New></New>}></Route>
        {/* 동정경로 url paramter를 의미  */}
        <Route path="/diary/:id" element={<Diary></Diary>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </>
  )
}

export default App
