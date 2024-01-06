import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setState] = useState(15);
 
  const addvalue=()=>{
  // console.log("Added Value" , Math.random() );
  if(value<20)
    setState(value+1);
  }

  const decreasevalue=()=>{
    if(value>0)
    setState(value-1)
  }

  return (
    <>
     <h1>Chai Aur React</h1>
     <h1>Counter Value : {value}</h1>
     <button
     onClick={addvalue}>add Value {value}</button>
     <br />
     <button onClick={decreasevalue}>decrease Value {value}</button>
    </>
  )
}

export default App
