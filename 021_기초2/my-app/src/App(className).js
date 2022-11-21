// 태그에 클래스 넣기 및 스타일 적용하기

import './app.css';
import { One } from './components/One.js'
import { Two } from './components/Two.js'

// style 부여

function App() {
  const style = {backgroundColor:"black", color:"white"};
  return (
    <div>
      <div style={{backgroundColor:"black", color:"white"}}>hello world 1</div>
      <div style={style}>hello world 2</div>
      {/* error */}
      {/* <div style="color:red;">hello world 3</div> */}

      <One/>
      <Two/>
      {/* <h2>hello</h2> */}
      {/* <h2>
      hello
      </h2> */}
      
 
      <h2 className="hi">hello</h2>
      <h2 className="hello">hello</h2>

      {/* <h2 class="hi">hello</h2>
      <h2 class="hello">hello</h2> */}
    </div>
  );
}

export default App;