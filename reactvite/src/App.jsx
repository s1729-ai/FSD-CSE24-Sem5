import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{border:'2px solid red'}}>
        <h1>ABES Engineering College</h1>
        
        <label>Roll Number: </label>
        <input type="text"/>
        <br/>

        <label>Name: </label> 
        <input type="text"/> 
        <br/>

        <label>Branch: </label>
        <input type="text"/>
        <br/>

        <label>Section: </label>
        <input type="text"/>
        <br/>

        <label>Skills: </label>
        <input type="text"/>

      </div>
    </>
  )
}

export default App