import { useState } from 'react'
import './App.css'

function App() {


  // let counter = 15;

  const [activeCounter,setCounter]=useState(15)

  const addNum=()=>{
    // counter = counter+1;
    // console.log("Clicked",counter)
    if(activeCounter<=20){
      setCounter(activeCounter+1);
    }
    else{
      console.log("You canot go above 20!")
    }
    
  }
  const subNum=()=>{
    // counter = counter+1;
    // console.log("Clicked",counter)
    if(activeCounter>0){
      let SubNo = activeCounter-1;
      setCounter(SubNo);
    }
    else{
      console.log("You can not go in negative!")
    }
   
  }


  return (
    <>
      <div>
        <h1>My Counter: {activeCounter}</h1>
        <button onClick={addNum}>Add {activeCounter}</button>
        <button onClick={subNum}>Subtract {activeCounter}</button>
      </div>

      <p>Footer: {activeCounter}</p>

    </>
  )
}

export default App
