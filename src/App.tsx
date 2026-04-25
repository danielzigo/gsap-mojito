import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// This registration is only needed once, so it's good to have it here.
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
