import Button from './Button'
import DiaryItem from './DiaryItem'
import './DiaryList.css'
const DiaryList = () => {
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option value={'latest'}>최신순</option>
          <option value={'oldest'}>오래된 순</option>
        </select>
        <Button type={'POSITIVE'} text={'새 일기 작성하기'}></Button>
      </div>
      <div className="list_wrapper">
        <DiaryItem></DiaryItem>
      </div>
    </div>
  )
}

export default DiaryList
