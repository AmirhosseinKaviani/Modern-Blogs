
import './App.css'
import {Outlet} from "react-router-dom"
import Navbar from './pages/components/Navbar'

function App() {
 

  return (
    <>
      <Navbar/>
      <Outlet/>

    </>
  )
}

export default App
