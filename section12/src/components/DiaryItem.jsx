import { getEmotionImage } from '../util/get-emotion-image'
import Button from './Button'
import './DiaryItem.css'
const DiaryItem = () => {
  const emotionId = 1
  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}  `}>
        <img src={getEmotionImage(1)}></img>
      </div>
      <div className="info_section">
        <div className="create_date">{new Date().toLocaleDateString()}</div>
        <div className="content">안녕하세요</div>
      </div>
      <div className="button_section">
        <Button text="수정하기"></Button>
      </div>
    </div>
  )
}

export default DiaryItem
