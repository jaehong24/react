import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DiaryStateContext } from '../App'

export const useDiary = (id) => {
  const data = useContext(DiaryStateContext)
  const [curDiaryItem, setCurDiaryItem] = useState()
  useEffect(() => {
    const currentItem = data.find((item) => item.id === Number(id))
    if (!currentItem) {
      window.alert('존재하지 않는 일기입니다.')
      nav('/', { replace: true })
    }
    setCurDiaryItem(currentItem)
  }, [id, data])

  return curDiaryItem
}
