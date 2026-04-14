import { useState } from 'react'
function App() {
  const[data,setData]=useState("Hello World");

  function fun(){
    setData("Demo")
  }

  return (
    
    <>
      <h1>Demo of state for variables</h1>
      <h2>{data}</h2>
      <button onClick={()=>fun()}>Click Me</button>
    
    </>
  )
}
   
export default App
