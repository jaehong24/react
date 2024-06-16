// import { useState } from 'react'
import './App.css'
import Header from "./components/Header" //확장자 생략 가능 
import Main from "./components/Main"
import Footer from "./components/Footer"
import Button from "./components/Button"

const Header2 = ()=>{ // 헤더 컴포넌트 화살표함수
  return(
    <header>
        <h1>header</h1>
    </header>
  )
}

const ButtonProps = {
  text:"메일",
  color:"RED",
  a:1,
  b:2,
  c:3
}

// 부모컴포넌트
function App() { // 앱 컴포넌트

  // const [count, setCount] = useState(0)
  
  return (
    <> 
      {/* {/* <Header />  
      <Main/>
      <Footer></Footer> */}
      <Button {...ButtonProps}></Button>

      <Button text={'카페'} ></Button>

      <Button text={'블로그'}>
          <div>자식요소</div> 
          {/* childeren */}
          <Header></Header>
      </Button> 

    </>
  )
}



export default App
