import { useState } from "react"

function Input(props){
  const [inputValue, setInputValue] = useState('')
  
   const handleInput=(event)=>{
    setInputValue(event.target.value)
  }

  const addTask=()=>{
    props.addChildTask(inputValue)
    setInputValue('')
  }
  
  return(
    <div>
        <input type='text' value={inputValue} onChange={handleInput}/>   
        <button onClick={addTask}>Task</button>  
        </div>
  )
}

export default Input