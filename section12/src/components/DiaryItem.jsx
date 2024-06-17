import { getEmotionImage } from '../util/get-emotion-image'
import Button from './Button'
import './DiaryItem.css'
import { useNavigate } from 'react-router-dom'
const DiaryItem = ({ data }) => {
  // 페이지 이동 기능
  const nav = useNavigate()

  return (
    <div className="DiaryItem">
      <div
        onClick={() => nav(`/diary/${data.id}`)}
        className={`img_section img_section_${data.emotionId}  `}
      >
        <img src={getEmotionImage(data.emotionId)}></img>
      </div>
      {console.log(data.createDate)}
      <div className="info_section">
        <div className="create_date">
          {new Date(data.createDate).toLocaleDateString()}
        </div>
        <div className="content">{data.content}</div>
      </div>
      <div className="button_section">
        <Button
          onClick={() => nav(`/edit/${data.id}`)}
          text="수정하기"
        ></Button>
      </div>
    </div>
  )
}

export default DiaryItem
