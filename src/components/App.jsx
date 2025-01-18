import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Projects from './Projects'
import Home from './Home'

function App() {
  return (<div>
    <Header/>
    <Home/>
    <div className='fullbody'> 
    <Projects/>
    </div>
    <Footer className="footer"/>
    </div>)
}

export default App
