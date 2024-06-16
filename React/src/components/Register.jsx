import { useState, useRef } from 'react'

// 간단한 회원 가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  })

  const countRef = useRef(0)
  const inputRef = useRef()

  const onChange = (e) => {
    countRef.current++
    console.log(countRef.current)
    setInput({
      ...input, //기존 input 객체의 모든 속성을 새로운 객체에 복사
      [e.target.name]: e.target.value, //// 특정 입력 필드의 값을 업데이트
      //birth : e.target.value
    })
  }

  //   const onChangeName = (e) => {
  //     setInput({
  //       ...input, // 기존의 bio, countr, birth 불러오기
  //       name: e.target.value,
  //     })
  //   }
  //   const onChangeBirth = (e) => {
  //     setInput({
  //       ...input,
  //       birth: e.target.value,
  //     })
  //   }

  //   const onChangeCountry = (e) => {
  //     setInput({
  //       ...input,
  //       country: e.target.value,
  //     })
  //   }
  //   const onChangeBio = (e) => {
  //     setInput({
  //       ...input,
  //       bio: e.target.value,
  //     })
  //   }

  const onSubmit = () => {
    if (input.name === '') {
      // 이름을 입력하는 DOM 요소에 포커스
      console.log(inputRef.current)
      inputRef.current.focus()
    }
  }
  return (
    <div>
      <div>
        <input
          ref={inputRef}
          value={input.name}
          name="name"
          onChange={onChange}
          placeholder="이름"
        />
      </div>
      <div>
        <input
          value={input.birth}
          type="date"
          name="birth"
          onChange={onChange}
        ></input>
      </div>
      <div>
        <select value={input.country} name="country" onChange={onChange}>
          <option value=""></option>
          <option value="kor">한국</option>
          <option value="uk">영국</option>
          <option value="us">미국</option>
        </select>
      </div>

      <div>
        <textarea value={input.bio} name="bio" onChange={onChange}></textarea>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  )
}

export default Register
