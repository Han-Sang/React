//공통적인 부분을 찾아내어 합성 컴포넌트를 만들어주세요
import styled from "styled-components";

const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
  box-shadow: 5px 10px 11px 3px rgba(0, 0, 0, 0.67);
;
`
const Card = (props) => {
  return (
  <CardDiv>
     <img src="https://picsum.photos/200/300​" alt="" style={{ width: "100%" }}/>
      <h2>{props.value}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit ipsam quas, temporibus eius est, porro ex repudiandae sed illum voluptatem, nemo dolorem corporis iusto sapiente facere! Illo, quae. Consequatur.</p>
    {props.children}
  </CardDiv>
  )
}
function One(){
  return (
      <>
      <a href="#">SHARE</a>
      <a href="#">LEARN MORE</a>
      </>
  )
}

function Two(){
  return (
    <>
      <a href="#">SHARE</a>
    </>
  )
}

function Three(){
  return (
    <>
      <a href="#">SHARE</a>
    </>
  )
}

function App() {
  return (
    <>
   <Card value="One">
        <One />
    </Card>

    <Card value="Two">
      <Two />
    </Card>

    <Card value="Three">
        <Three />
    </Card>
    </>
  );
}

export default App;