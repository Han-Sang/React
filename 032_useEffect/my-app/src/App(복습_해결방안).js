import { useState, useEffect } from "react"

export default function App() {
  // 변수 : 수업중이라는 변수가 들어간 수업여부
  //set수업여부 : 변수 변경 값
  const [수업여부, set수업여부] = useState('수업중')
  const [잔고, set잔고] = useState(100000)

  const handleZoomOut = (e) => {
    set수업여부('수업종료')
  }

  // useEffect( , 감시할 변수)
  useEffect (() => {
if(수업여부 ==='수업종료' && 잔고 >= 20000){
  alert('카페로 출발!')
  set잔고(90000)
}

  },[수업여부] )

  return (
    <div>
      <button onClick={handleZoomOut}>ZoomOut</button>
      <p>{수업여부}</p>
      <p>{잔고}</p>
    </div>
  )
}
