import One from './components/one/One'
import Two from './components/two/Two'
import Three from './components/three/Three'
import Card from './components/card/Card'
import { children } from 'react'

function App() {
  return (
    <>
    <Card title = "One">
      <One />
      </Card>
      
      <Card title = "Two">
      <Two />
      </Card>
      
      <Card title = "Three">
      <Three />
    </Card>
  </>
  );
}

export default App;