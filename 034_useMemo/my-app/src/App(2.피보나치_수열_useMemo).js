// useMemo 사용
import { useState, useMemo } from 'react'
function 부하(){
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  return s
}

function App() {
  const [count, setCount ] = useState(0)
  let result = useMemo(() => {
    return 부하()
  }, [])
  
  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count);
  }
  return (
    <div className="App">
      <h1>계산결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>
    </div>
  );
}
export default App;
