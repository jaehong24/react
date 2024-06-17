import { useContext } from 'react'
import Button from '../components/Button'
import Editor from '../components/Editor'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { DiaryDispatchContext } from '../App'

const New = () => {
  const nav = useNavigate()
  const { onCreate } = useContext(DiaryDispatchContext)
  const onSubmit = (input) => {
    console.log(input)
    console.log(input.createDate)
    onCreate(input.createDate.getTime(), input.emotionId, input.content)
    nav('/', { replace: true })
    // replace true 하면 뒤로가기못누름ㄴ
  }
  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        leftChild={
          <Button
            text={'< 뒤로가기'}
            onClick={() => {
              nav(-1)
            }}
          ></Button>
        }
      ></Header>
      <Editor onSubmit={onSubmit}></Editor>
    </div>
  )
}

export default New
