import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from "react-router-dom";

function Index(){
  return <div>index</div>
}

function Products(props){
    const location = useLocation()
    const { num } = useParams()
  return <div>{num}번 product detail page</div>
}

function ProductsNotice(props){
    const location = useLocation()
    const {num} = useParams()
  return <div>{num}번 ProductNoice</div>
}

function Cart(){
  return <div>Cart</div>
}

function Coupon(){
    return <div>coupon</div>
  }

function Question(){
    return <div>question</div>
  }
  
function Notice(){
    return <div>notice</div>
  }

function User(){
    return <div>user</div>
  }

  
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/products/:num" element={<Products />}/>
        <Route path="/products/:num/notice" element={<ProductsNotice />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/coupon" element={<Coupon />}/>
        <Route path="/question" element={<Question />}/>
        <Route path="/notice" element={<Notice />}/>
        <Route path="/user" element={<User />}/>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;