// virtualDom : 경량화된 오브젝트

//리액트는 요소들을 경량화된 오브젝트(=버츄얼 돔)로 렌더링
// -> 요소의 상태가 바뀌었을 때 전체를 렌더링 하지 않고 

// 변경이 일어난 요소들만 렌더링 할 수 있다는 특징이 있다
// -> 이런 특징을 이용해서 프로젝트 규모, 특징을 고려해서 리액트를 적용하는게 장점이 된다면 적용하는 게 좋다

function One(props) {
  console.log('//one 시작');
  console.log(props);
  console.log(props.children[0]);
  console.log('//one 끝');
  return (
    <div>
      {/* children이 array이기 때문에 */}
      {props.children}
    </div>
  )
}

function Two(props) {
  console.log('//two 시작');
  console.log(props);
  console.log('//two 끝');

  return (
    <div>
      {/* array x */}
      {/* array가 아닌 이유: Two밑에 태그가 하나뿐 */}
      {props.children}
    </div>
  )
}

function Three(props){
  console.log('//three 시작');
  console.log(props);
  console.log('//three 끝');
  return (
    <div>hello</div>
  )
}

function Four(props){
  console.log('//four 시작');
  console.log(props);
  console.log('//four 끝');
  return (
    <div>hello</div>
  )
}

function Five(){
  return (
    <div>
      <p>hello</p>
      <Six />
    </div>
  )
}

function Six() {
  return <div>hello</div>
}

// < /> : children을 받지 않음 vs <></>: 안에서 컨트롤 가능 (props를 받냐 안받냐)

function App() {
  return (
    <div>
      <h1>app - h1</h1>
      <p>app - h1</p>
      
      <One>
        <h2>app &gt; One - h1</h2>
        <p>app &gt; One - h1</p>
          <Two>
          <h2>app &gt; One &gt; Two - h1</h2>
          <p>app &gt; One &gt; Two - h1</p>
          </Two>
            <Three />
            <Four></Four>
            <Five />
            <Six />

      </One>
    </div>
  );
}
export default App;
