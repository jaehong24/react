import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Editor from '../components/Editor'
import { useContext, useEffect, useState } from 'react'
import { DiaryDispatchContext } from '../App'
import { DiaryStateContext } from '../App'
import { useDiary } from '../hooks/useDiary'
const Edit = () => {
  const params = useParams()
  const nav = useNavigate()
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext)

  const curDiaryItem = useDiary(params.id)
  const onClickDelete = () => {
    if (window.confirm('일기를 정말 삭제 할까요 ? 다시 복구 되지 않아요')) {
      //일기 삭제

      const id = Number(params.id) // 문자열을 숫자로 변환
      onDelete(id)
      nav('/', { replace: true })
    }
  }

  const onSubmit = (input) => {
    if (window.confirm('일기를 정말 수정할까요 ? '))
      onUpdate(
        Number(params.id),
        input.createDate.getTime(),
        input.emotionId,
        input.content
      )
    nav('/', { replace: true })
  }
  return (
    <div>
      <Header
        title={'일기 수정하기'}
        rightChild={
          <Button
            text={'삭제하기'}
            onClick={onClickDelete}
            type={'NEGATIVE'}
          ></Button>
        }
        leftChild={
          <Button
            onClick={() => {
              nav(-1)
            }}
            text={'< 뒤로가기'}
          ></Button>
        }
      ></Header>
      <Editor initData={curDiaryItem} onSubmit={onSubmit}></Editor>
    </div>
  )
}

export default Edit
