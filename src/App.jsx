import styles from './App.module.css'
import { Navbar } from './componets/Navbar/Navbar'
import { Me } from './componets/Navbar/Me/me.jsx'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Me />
    </div>

  )
}

export default App
