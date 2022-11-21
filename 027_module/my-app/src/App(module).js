import One from './components/One/one'
import Two from './components/Two/two'
// import './app.css'
// import './app.module.css'
import styles from './app.module.css'

function App() {
  return (
    <>
      <h1>hello world0</h1>
      <p className={styles.contents}>hello world0</p>
      <One/>
      <Two/>
    </>
  );
}

export default App;