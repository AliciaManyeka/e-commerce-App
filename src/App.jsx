
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css'
import Footer from './components/Footer'
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
