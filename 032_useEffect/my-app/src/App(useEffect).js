// useEffet는 여러 개 감시 <-> useState(하나만 감시)

import {useState ,useEffect } from 'react'

function Counter (){
  const [count, setCount] = useState(0)
  const handleCountUp = (e) => {
    setCount(count + 1)
  }

  // count가 변했을 때 동작할 행동을 useEffect를 이용해 구현
  // 감시하면서 실행될때마다 변경되는 코드
  useEffect(()=>{
      if (count % 2) {
        alert('홀수입니다.')
      }else{
        alert('짝수입니다.')
      }

  }, [count])
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;