import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { useContext } from 'react'
import { DiaryStateContext } from '../App'
import Button from '../components/Button'
import Viewer from '../components/Viewer'
import { useDiary } from '../hooks/useDiary'
import { getStringedDate } from '../util/get-stringed-date'

const Diary = () => {
  const data = useContext(DiaryStateContext)

  const parmas = useParams()
  const thisData = data.find((item) => item.id === Number(parmas.id))

  const nav = useNavigate()

  const curDiaryItem = useDiary(parmas.id)
  console.log(curDiaryItem)
  if (!curDiaryItem) {
    return <div>Loding...</div>
  }
  const { createDate, emotionId, content } = curDiaryItem
  const title = getStringedDate(new Date(createDate))

  return (
    <div>
      <Header
        title={`${title} 기록`}
        rightChild={
          <Button
            text={'수정하기'}
            onClick={() => {
              nav(`/edit/${parmas.id}`)
            }}
          ></Button>
        }
        leftChild={
          <Button
            text={'< 뒤로가기'}
            onClick={() => {
              nav('/')
            }}
          ></Button>
        }
      ></Header>
      <Viewer emotionId={emotionId} content={content}></Viewer>
    </div>
  )
}

export default Diary
