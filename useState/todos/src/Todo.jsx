import {useState} from 'react'
import Input from './Input'
import List from './List'

function Todo() {
    const [taskArr,setTaskArray]=useState([])

    const addChildTask=(inputValue)=>{
    const newTask=inputValue
    setTaskArray([...taskArr,newTask])
  }
  
  const handleDelete=(idx)=>{
    const filteredArr=taskArr.filter((each,cIdx)=>{
      return idx!=cIdx;
    })
    setTaskArray(filteredArr)
  }

  return (
    <>
        <Input addChildTask={addChildTask}></Input>
        <List taskArr={taskArr} handleDelete={handleDelete}></List>
    </>
  )
}

export default Todo