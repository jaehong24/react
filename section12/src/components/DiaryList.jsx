import { useNavigate } from 'react-router-dom'
import Button from './Button'
import DiaryItem from './DiaryItem'
import './DiaryList.css'
import { useState } from 'react'

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState('latest')

  const onChange = (e) => {
    setSortType(e.target.value)
  }
  const nav = useNavigate()

  const getSortedData = () => {
    // sort 메서드는 어떠한 값도 반환하지않고 원본 배열 정렬
    // toSorted 원본배열을 나두고, 정렬 후  새로운 배열을 반환 해준다
    return data.toSorted((a, b) => {
      if (sortType === 'oldest') {
        return Number(a.createDate) - Number(b.createDate)
      } else {
        return Number(b.createDate) - Number(a.createDate)
      }
    })
  }

  // 최신순, 오래된순 정렬 된 데이터 제공
  const sortedData = getSortedData()

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChange}>
          <option value={'latest'}>최신순</option>
          <option value={'oldest'}>오래된 순</option>
        </select>
        <Button
          onClick={() => nav(`/new`)}
          type={'POSITIVE'}
          text={'새 일기 작성하기'}
        ></Button>
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} data={item}></DiaryItem>
        ))}
      </div>
    </div>
  )
}

export default DiaryList
