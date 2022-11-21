function Three(){
  return <div>가격</div>
}

function Two(){
  return <div>
    <Three />
  </div>
}

function One(price){
  return (
    <div>
      <Two price={price} />
    </div>
  )
}

export default function App() {
  const value = 1000 // 이 값을 three에서 출력하고 싶습니다.
  return (
    <div>
      <One price={price} />
    </div>
  )
}