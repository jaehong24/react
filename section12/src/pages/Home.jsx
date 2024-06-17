import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import Header from '../components/Header'
import { useState, useContext } from 'react'
import { DiaryStateContext } from '../App'

const getMonthlyData = (pivotDate, data) => {
  // 이번달의 시작 일과, 끝나는 일을 알아야한다 .
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime()

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime()

  return data.filter(
    (item) => beginTime <= item.createDate && item.createDate <= endTime
  )
}
const Home = () => {
  // 다이어리 컨텍스트가 공급하는 일기데이터를 date에 저장한다
  const data = useContext(DiaryStateContext)

  const [pivotDate, setPivotDate] = useState(new Date())
  const monthlyData = getMonthlyData(pivotDate, data)

  console.log(monthlyData)
  const onIncreaseMonth = function () {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  }
  const onDecreaseMonth = function () {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  }

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()} 년 ${pivotDate.getMonth() + 1} 월`}
        leftChild={<Button text={'<'} onClick={onDecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
      ></Header>
      <DiaryList data={monthlyData} />
    </div>
  )
}

export default Home
