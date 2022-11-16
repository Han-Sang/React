// npm start 후 주소창의 http://localhost:3000/one or /two 등으로 확인 

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        {/* url컨트롤 :  각각 주소창 뒤에 따라 들어가는 곳이 다름 */}
        {/* ex. www.sang.com/one => {<One />} url로 이동 */}
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name = 'licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
      </Routes>
    </BrowserRouter>
  );
  }
  
  function Index(){
    return <h1>hello world0</h1>
  }
  
  function One(props){
    console.log(props);
    return <h1>{props.name} hello world1</h1>
  }
  
  function Two(){
    return <h1>hello world2</h1>
  }
  
  function Three(){
    return <h1>hello world3</h1>
  }

  
  export default App;