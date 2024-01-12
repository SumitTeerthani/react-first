import { useCallback , useState ,useEffect , useRef } from "react"

function App() {
  
  const [length,lengthstate]=useState(8)
  const [numberallowed,numberallowedstate]=useState(false)
  const [charallowed,charallowedstate]=useState(false)
  const [password,passwordstate]=useState("");

  //Ref Hook 
const passwordRef=useRef(null)

  const passwordGenerator =useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+="1234567890"
    if(charallowed) str+="!@#$%^&*+"
    for (let i=0;i<length;i++) {
      pass+=str.charAt(Math.floor(Math.random() * str.length))
    }
    passwordstate(pass);

  },[length,numberallowed,charallowed,passwordstate])


const copyPasteToClipboard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(1,4);
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordGenerator()
},[length,numberallowed,charallowed,passwordGenerator])



  return (
    <>
  
      <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-800 
      bg-gray-700 shadow-xl"> 
      <h1 className="text-white text-centre">Password Generator</h1>
     <div className=" flex shadow rounded-lg overflow-hidden mb-4 py-2">
         <input 
         type="text"
            value={password}
            className="outline-none w-full py-3 px-3 rounded-sm"
            placeholder="Password"
            readOnly
            ref={passwordRef}
         />
         <button onClick={copyPasteToClipboard() } className="outline-none
          bg-blue-700 shrink-0 px-3 py-0.5
          text-white  ">
              Copy 
         </button>
     </div>
       
     <div className=" flex gap-x-3 text-sm">
     <div className="flex item-centre gap-x-2 py-2">
        <input type="range" 
      min={6}
      max={50}
     value={length}
      className="cursor-pointer"
       onChange={(e)=>{lengthstate(e.target.value)}}
   /> <label >Length:{length}</label>
 </div>
 <div className="flex items-centre gap-x-1 py-2">
   <input type="checkbox" 
   defaultChecked={numberallowed}
   id="numberInput"
    onChange={()=>{
      numberallowedstate((prev)=>!prev)
    }}
    /> <label >Numbers</label>
 </div>
 <div className="flex items-centre gap-x-1 py-2">
   <input type="checkbox" 
   defaultChecked={charallowed}
   id="numberInput"
    onChange={()=>{
      charallowedstate((prev)=>!prev)
    }}
    /> <label > Characters</label>
 </div>
</div>

      </div>

    </>
  )
}

export default App
