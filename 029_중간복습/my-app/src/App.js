// 쇼핑몰 제작 구현
// 모듈 분리 할 것


// 설치 목록
// npx create-react-app my-app --template basic-react
// cd my-app
// npm install styled-components styled-reset

// 기본세팅
import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import shoppingCart from './assets/icon-shopping-cart-white.svg'
import iconHeartOn from "./assets/icon-heart-on.svg";
import iconHeart from "./assets/icon-heart.svg";

const GlobalStyle = createGlobalStyle`
${reset}

/* reset코드 + 커스텀reset코드 + 유틸리티 코드 */
/* 한 줄 말줄임, 두 줄 말줄임... */

//1.
span {
  color: red;
  font-size: 12px;
}

a {
  text-decoration: none;
  color: inherit; 
}

button {
  border: none;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}

li.active {

}
`;
////

//4.
const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 160px;
`

const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`

const ItemProductList = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

//이미지 크기
const ImgProduct = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
`

//쇼핑 카트
// ${} : 템플릿리터럴
const IconShoppingCart = styled.a`
  background: #000 url(${shoppingCart}) no-repeat center / 40px 40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* 아이콘이 따라다니게 하기 */
  position: sticky;
  top: 60px;
`
//5. 하트 및 가격
const Heart = styled.span`
  display: inline-block;
  background: url(${iconHeartOn}) 21px;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  bottom: 50px;
  &.true {
    background: url(${iconHeart}) 21px;
  }
`;

const ProductName = styled.p`
  margin: 20px 0 10px;
  font-weight: 400;
  width: 300px;
  font-size: 18px;
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

const Won = styled.span`
  font-size: 16px;
  color: #333333;
`;

////

//3.
// 데이터 받아오기 (fetch 사용 - 리엑트에서는 fetch보다는 axios 사용) 
async  function requests(){
  const response = await fetch('http://test.api.weniv.co.kr/mall');
  const data = await response.json()
  return data
}

//

//2. 
function ProductList() {
  const [productListData, setProductListData] = useState([]);
  // 토글 사용
  const [dataLoadSwitch, setDataLoadSwitch] = useState(true);

  // false로 인해 한 번 실행 후 렌더링 반복 x
  if (dataLoadSwitch){
    requests().then((productData) => {
      setProductListData(productData)
      setDataLoadSwitch(false)
    });
  }

  return (
    <ContainerProductList>
    {productListData.map((item) => 
    <ProductListItem 
     key = {item.id}
     productName = {item.productName}
     price={item.price}
     thumbnailImg={item.thumbnailImg}
     />
     )}
    </ContainerProductList>
  );

  // 무한반복  (requests() 실행 -> setProductListData 변경 -> requests 실행) : 리소스 자원 손실
  // requests().then(productData => setProductListData(productData))
  // console.log(productListData);

  //promise 실행
  // const productListData = requests()
  // console.log(productListData)
  return <p>hello world</p>
}

function ProductListItem({productName, price, thumbnailImg}){
  const [isActive, setActive] = useState(true);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <ItemProductList>
      <ImgProduct 
        src={"http://test.api.weniv.co.kr/" + thumbnailImg} 
        alt={productName} 
      />
      <div className="info">
        <ProductName>{productName}</ProductName>
        <Heart className={isActive} onClick={handleToggle}></Heart>
        <Price>
          {price}
          <Won>원</Won>
        </Price>
      </div>
    </ItemProductList>
  );
}

function ShoppingCart(){
  return <IconShoppingCart href="#">{/*쇼핑카트*/}</IconShoppingCart>
}



////

// main
function App() {
  return (
 
  <ContainerMain>
  <GlobalStyle/>
  <ProductList/>
  <ShoppingCart/>
  </ContainerMain>
 
  );
  }
  
  export default App;