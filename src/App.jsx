import styles from './App.module.css'
import { Navbar } from './componets/Navbar/Navbar'
import { Me } from './componets/Me/me.jsx'
import { About } from './componets/About/about.jsx'
import { Expeiernce } from './componets/Experience/experience.jsx'
import { Projects } from './componets/Projects/projects.jsx'
import { Contact } from './componets/Contact/contact.jsx'
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Me />
      <About />
      <Expeiernce />
      <Projects />
      <Contact />
    </div>

  )
}

export default App
