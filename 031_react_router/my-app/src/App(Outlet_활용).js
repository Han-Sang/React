import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from "react-router-dom";

function Index(){
  return <div>index</div>
}

function Login(){
  return <div>login</div>
}

function Study(){
  return <div>study</div>
}

function StudyDetail(props){
    // 콘솔에 아무것도 안들어옴
    // 이전 버전에서 props로 처리 
    // console.log(props);
    const location = useLocation()

    // const params = useParams() 또는
    const { num } = useParams()
  
    // console.log(location)
    // console.log(params) 또는
    // console.log(num)
    return <div>{num}번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 {num}번 게시물을 요청하셔야 합니다.</div>
  }

 // function Test(){
//   const location = useLocation()
//   const { test } = useParams()
  
//   console.log(location)
//   console.log(test)

//   return <div>hello</div>
// }

function Chat(){
    const location = useLocation()
    const params = useParams()
    console.log(location)
    console.log(params)

    // 권하진 않음
    // url의 주소 깊이가 깊어졌을 때 앞이 있는 값이 필요한 경우 종종 있다.
    // 코드 일관성 유지
    const 채팅방번호 = location.pathname.split('/')[2]
    return <p>{채팅방번호}번 게시물에 오신것을 환영합니다. 여기는 {채팅방번호}번 게시물의 채팅방입니다. 여러분이 fetch를 통해 백엔드에사 채팅 정보를 받아와야 합니다</p>
  }
  
  function Memo(){
    const location = useLocation()
    const {num} = useParams()

    // Chat() 에 비해 깔끔한 방식
    return <p>{num}번 게시물에 오신것을 환영합니다. 여기는 {num}번 게시물의 메모방입니다. 여러분이 fetch를 통해 백엔드에서 메모 정보를 받아와야 합니다.</p>
  }

function Notice(){
  return <div>notice</div>
}

function NoticeDetail(){
    return <div>notice</div>
  }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/study" element={<Study />}/>

        <Route path="/study/:num" element={<StudyDetail />}/>

        {/* 1. */}
        {/* <Route path="/study/:num/:test" element={<Test />}/> */}
        {/* <Route path="/study/:num/chat" element={<Chat />}/> */}
        {/* <Route path="/study/:num/memo" element={<Memo />}/> */}
        
        {/* 2.외부 컴포넌트 (outlet으로 사용) */}
        {/* 주로 url의 깊이가 깊을 때 깔끔하게 사용 */}
        <Route path="/study/:num/*" element={<Outlet />}>
            <Route path="chat" element={<Chat />}/>
            <Route path="memo" element={<Memo />}/>
        </Route>

        <Route path="/notice" element={<Notice />}/>
        <Route path="/notice/:num" element={<NoticeDetail />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;