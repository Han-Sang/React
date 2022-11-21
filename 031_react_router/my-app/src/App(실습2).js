import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from "react-router-dom";

function Index() {
    return( <div>index</div>)
}
function A() {
    return( <div>a</div>)
}


function B() {
    return( <div>b</div>)
}

function C() {
    return( <div>c</div>)
}

function Cdetail(props) {
    const location = useLocation()
    const {text} = useParams()
    return ( <div>{text}번 cdetail</div> )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Index/>} />
        <Route path="/a" element ={<A/>} />
        <Route path="/b" element ={<B/>} />
        <Route path="/c" element ={<C/>} />
        <Route path="/c/:text" element ={<Cdetail/>} />
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;