// // 최종 목표
// https://www.studyin.co.kr/
// https://www.studyin.co.kr/login

// https://www.studyin.co.kr/study/6
// https://www.studyin.co.kr/study/6/chat
// https://www.studyin.co.kr/study/6/memo

// https://www.studyin.co.kr/notice

// https://www.studyin.co.kr/notice/recruit
// https://www.studyin.co.kr/notice/business


// //step 1
// https://www.studyin.co.kr/
// https://www.studyin.co.kr/login
// https://www.studyin.co.kr/study
// https://www.studyin.co.kr/notice

// //step2
// https://www.studyin.co.kr/study/6 를 들어갔을 때에
// <p>6번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 6번 게시물을 요청하셔야 합니다.</p>

// https://www.studyin.co.kr/study/6/chat

// https://www.studyin.co.kr/study/6/memo


import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from "react-router-dom";
function Index() {

  return(
    <div>첫 화면입니다.</div>
  )
}

function Login(){
  return(
    <div>로그인 화면입니다.</div>
  )

}

function Study(props) {
  const location = useLocation()
  const { num } = useParams()
  return(
    <div>{num}번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 {num}번 게시물을 요청하셔야 합니다</div>
  )
}

function Chat() {
  return(
    <div>채팅 화면입니다.</div>
  )
}

function Memo() {
  return(
    <div>메모 화면입니다.</div>
  )
}

function Notice() {
  return(
    <div>Notice 첫 화면입니다.</div>
  )
}

function Recruit() {
  return( 
    <div>Notice의 recruit 화면입니다.</div>
  )
}
function Business() {
  return(
    <div>Notice의 Business 화면입니다.</div>
  )
}

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/study/:num" element={<Study/>}/>
      
      <Route path="/study/:num/*" element={<Outlet/>}>
        <Route path="chat" element= {<Chat />} />
        <Route path="memo" element= {<Memo />} />
      </Route>

      <Route path="/notice" element={<Notice />} />
      <Route path="/notice/recruit" element={<Recruit />} />
      <Route path="/notice/business" element={<Business />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App;