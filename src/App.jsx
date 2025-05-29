import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Me } from './components/Me/me.jsx'
import { About } from './components/About/about.jsx'
import { Expeiernce } from './components/Experience/experience.jsx'
import { Projects } from './components/Projects/projects.jsx'
import { Contact } from './components/Contact/contact.jsx'
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
