import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"

// This registration is only needed once, so it's good to have it here.
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div className="flex-center h-screen h-dvh">
        <h1 className="text-3xl text-indigo-500">Hello, GSAP!</h1>
    </div>
  )
}

export default App