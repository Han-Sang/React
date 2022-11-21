
// import './one.css'
//  import './one.module.css'
import styles from './one.module.css'

export default function One () {
  return (
    <section>
        <h2>hello world1</h2>
        <p className={styles.contents}>hello world1</p>
    </section>
  )
}