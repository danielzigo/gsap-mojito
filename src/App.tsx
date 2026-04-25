import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'

// This registration is only needed once, so it's good to have it here.
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  )
}

export default App
