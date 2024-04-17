import React from 'react'
import NavbarComponent from './components/Navbar/NavbarComponent'
import HandpickedProjects from './components/HandPicked/HandpickedProjects'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavbarComponent/>
      <HandpickedProjects/>
      <Footer/>
    </div>
  )
}

export default App
