import Edit from '../pages/Edit'
import './Editor.css'
import EmotionItem from './EmotionItem'

import { useContext, useEffect, useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { emtionList } from '../util/constants'
import { getStringedDate } from '../util/get-stringed-date'

const Editor = ({ onSubmit, initData }) => {
  const [input, setInput] = useState({
    createDate: new Date(),
    emotionId: 3,
    content: '',
  })
  const nav = useNavigate()

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createDate: new Date(Number(initData.createDate)),
      })
    }
  }, [initData])
  // name 과 value를 받으면 여러 state를 한번에 관리 할 수 있다.
  const onChangeInput = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    let name = e.target.name
    let value = e.target.value

    if (name === 'createDate') {
      value = new Date(value)
    }
    setInput({
      ...input,
      [name]: value,
    })
  }

  const onClickSubmitButton = () => {
    onSubmit(input)
  }

  const emotionId = 4

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘날짜</h4>
        <input
          name="createDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createDate)}
          type="date"
        ></input>
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emtionList.map((item) => (
            <EmotionItem
              onClick={() => {
                onChangeInput({
                  target: {
                    name: 'emotionId',
                    value: item.emotionId,
                  },
                })
              }}
              key={item.emotionId}
              emotionId={item.emotionId}
              emotionName={item.emotionName}
              isSelected={item.emotionId === input.emotionId}
            ></EmotionItem>
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어떘나요?"
        ></textarea>
      </section>
      <section className="button_section">
        <Button
          onClick={() => {
            nav(-1)
          }}
          text={'취소하기'}
        ></Button>
        <Button
          text={'작성하기'}
          onClick={onClickSubmitButton}
          type={'POSITIVE'}
        ></Button>
      </section>
    </div>
  )
}

export default Editor
