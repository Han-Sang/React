//공통적인 부분을 찾아내어 합성 컴포넌트를 만들어주세요
//풀이 1

import { Children } from "react";

function One(){
  return (
    <>
      <a href="#">SHARE</a>
      <a href="#">LEARN MORE</a>
      <hr />
    </>
  )
}

function Two(){
  return (
    <>
      <a href="#">SHARE</a>
      <hr />
    </>
  )
}

function Three(){
  return (
    <>
      <a href="#">SHARE</a>
      <hr />
      </>
    )
}

function Card(props){
  return (
    <section>
          <img src="http://test.api.weniv.co.kr/asset/img/1/thumbnailImg.jpg" alt="" />
          <h2>{props.title}</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit ipsam quas, temporibus eius est, porro ex repudiandae sed illum voluptatem, nemo dolorem corporis iusto sapiente facere! Illo, quae. Consequatur.</p>
        {props.children}
    </section>
  )
}

function App() {
  return (
    <>
    <Card title ="One"> 
      <One />
    </Card> 

    <Card title ="Two">
      <Two />
    </Card>
    
    <Card title ="Three">
     <Three />
    </Card>
    </>
  );
}

export default App;