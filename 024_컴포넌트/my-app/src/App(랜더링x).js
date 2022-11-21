function Resume({이름, 취미, 자기소개}) {
  let like = 0

  function clickLike(){
    like += 1
    console.log(like);
  }

  return (
    <section>
        <h2>{이름}</h2>
        <p>{취미}</p>
        <p>{자기소개}</p>
        {/* {like} 가 증가되지 않는 이유 : 변수가 변경이 된다하더라도 랜더링이 다시 일어나지 않기 때문입니다!  */}
      <button onClick={clickLike}>{like}</button>
    </section>
  )
}

function App() {
  return (
  <main>
  <Resume 이름='한상혁' 취미='코딩' 자기소개='안녕하세요 자기소개 부분 입니다' />
  </main>
  );
  }
  
  export default App;