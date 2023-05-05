

import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import { useRef } from "react"
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {

  
  const ref = useRef(null);
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  const handleProjects=()=>{
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }


  return (
    <>
      <div>
      <nav className="nav">
         <div style={{margin:"auto"}}>
               <button className='buttons' onClick={()=>ref1.current?.scrollIntoView({behavior: 'smooth'})}>About</button>
               <button className='buttons' onClick={handleProjects} >Projects</button>
               <button className='buttons' onClick={()=>ref2.current?.scrollIntoView({behavior:"smooth"})}>Skills</button>
              <button className='buttons' onClick={()=> ref3.current?.scrollIntoView({behavior:"smooth"})}>Contact</button>
  </div>
</nav>
        <div ref={ref1}><Home/></div>
        <div ref={ref}>< Projects/></div>
        <div ref={ref2}><Skills/></div>
        <div ref={ref3}><Contact/></div>
        
        <Outlet/>
      </div>
    </>
  )
}

export default App
