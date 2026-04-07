function App() {
  const fruit=(name)=>{
    alert(name)
  }

  return (
    
    <>

    
     <h1>Html page</h1>
      <button onClick={()=> fruit("Apple")}>Click Me</button>

    </>
  )
   
}

export default App
