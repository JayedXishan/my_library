import { Outlet } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
  
  

  return (
    <>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-200px)]">
        <Outlet ></Outlet>
      </div>
      <div>
        <Footer ></Footer>
      </div>
      
      
      
    </>
  )
}

export default App
