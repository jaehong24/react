import useInput from '../hooks/useInput'
// 3 가지 hook 관련된 팁
// 1. 함수컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다
// 3. 나만의 훅(Custom Hook) 직접 만들 수 있다.

// 컴포넌트 밖에서 사용하면 오류 발생
// const state = useState()

// use를 사용하면 커스텀 컴포넌트 제작 가능

const HookExam = () => {
  // 조건문 ,반복문에서 불가
  // if(true){
  //     const state = useState()
  //
  //   const state = useState()

  const [input, onChange] = useInput()

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  )
}

export default HookExam
