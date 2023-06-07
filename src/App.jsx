import { Category } from "./component/Category"
import { Footer } from "./component/Footer"
import HeroSection from "./component/HeroSection"
import { Navbar } from "./component/Navbar"
import { Trending } from "./component/Trending"


function App() {

  return (
    <>
      <div className='font-Rubik container'>
        <Navbar/>
        <HeroSection />
        <Category/>
        <Trending/>
        <Footer/>
      </div>

    </>
  )
}

export default App
