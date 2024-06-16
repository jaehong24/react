import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'

// useEffect 추가
import { useState, useEffect, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')
  const isMount = useRef(false)

  //  배열에 들어가 있는 값이 변경되면 첫번째 콜백 함수 가 실행
  // count => 의존성 배열, dependecy array, deps
  // 컴포넌트 내에서 우리가 원하는 값이 바꼈을 때 실행 하게 만들 수 있다.

  //  1. 마운트 : 탄생
  useEffect(() => {
    console.log('mount')
  }, [])

  //  2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true
      return
    }
    console.log('update')
  })

  //  3. 언마운트 : 죽음
  useEffect(() => {
    console.log(`count = ${count} / input = ${input}`)
  }, [count, input])

  const onClickButton = (value) => {
    // state는 비동기로 업데이트가 된다.
    // 변경된 state 값을 통해 사이드 이펙트를 주려면
    // useEffect를 통해 해야한다.
    setCount(count + value)
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        ></input>
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
