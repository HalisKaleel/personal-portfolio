import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Reference from "./components/Reference"
import Skills from "./components/Skills"

function App() {
  return (
    <div >
      <Navbar />
      <main >
        <section id="home" >
          <Hero />
        </section>
        <section id="about" >
          <About />
        </section>
        <section id="education" >
          <Education />
        </section>
        <section id="skills" >
          <Skills />
        </section>
        <section id="projects" >
          <Projects />
        </section>
        <section id="experience" >
          <Experience />
        </section>
        <section id="contact" >
          <Reference />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
