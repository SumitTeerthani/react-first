import { useState } from "react"

function App() {
  const [color,setState]=useState("olive")

  return (
     <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
         <div className=" fixed flex flex-wrap jutify-centre bottom-8 inset-x-0 px-2" >
         <div className="flex flex-wrap justify-center gap-3 shadow-md bg-white px-3
          py-2 rounded-lg"> 
          <button onClick={()=>(setState("red"))} className="outline-none px-4 py-2 rounded-sm text-white" 
          style={{backgroundColor:"red"}}>Red</button>
           <button onClick={()=>(setState("green"))} className="outline-none px-4 py-2 rounded-sm text-white" 
          style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>(setState("blue"))} className="outline-none px-4 py-2 rounded-sm text-white" 
          style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>(setState("yellow"))} className="outline-none px-4 py-2 rounded-sm text-white" 
          style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>(setState("grey"))} className="outline-none px-4 py-2 rounded-sm text-white" 
          style={{backgroundColor:"grey"}}>Grey</button>
            
         </div>
         </div>
      </div>
     </>
  )
}

export default App
