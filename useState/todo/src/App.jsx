import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'
import Todo from './components/Todo'

function App() {
  //const [inputValue,setInputValue] = useState('')

  const [taskArr,setTaskArr]=useState([]);
  /*   const addInput=(event)=>{
    setInputValue(event.target.value)
  } 

  const addTask=()=>{
    const newTask=inputValue
    const newTaskArr=[...taskArr,newTask]
    setTaskArr(newTaskArr)
    setInputValue('')
  } */
  return (
    <>
    <Todo/>
      {/* <div>
        <input type='text' placeholder='Add todo using this box' value={inputValue} onChange={addInput}/>
        <button onClick={addTask}>Add</button>
      </div> */}
       {/*<InputBox taskArr= {taskArr}  />*/}
      { /*   <div class='List'>
        <ul>
          {taskArr.map((task)=><li>{task}</li>)}
        </ul>
      </div> */} 
       {/* <List taskArr= {taskArr} /> */}
    </>
  )
}



export default App
