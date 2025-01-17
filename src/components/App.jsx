import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Projects from './Projects'

function App() {
  return (<div>
    <Header/>
    <div className='fullbody'> 
    <Projects/>
    </div>
    <Footer/>
    </div>)
}

export default App
