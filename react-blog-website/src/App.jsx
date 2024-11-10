
import './App.css'
import {Outlet} from "react-router-dom"
import Navbar from './pages/components/Navbar'
import Footer from './pages/components/Footer'

function App() {
 

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>

    </>
  )
}

export default App
