import React from 'react'
import InputBox from './components/InputBox'
import List from './components/List'

function Todo(){
  
  const addTask = (inputValue) =>{
    const newTask = inputValue;
    // we never mainpulate/change the state variable on our own
    // taskArr.append(newTask) -> we should not do this, as here the state varaible should not be manipulated by our own
    const newTaskArr = [...taskArr, newTask];
    setTaskArr(newTaskArr);// we are using newly created array and keep it into taskArr = newTaskArr;
    }
  return (
    <div>
    <InputBox taskArr= {taskArr}></InputBox>
    <List></List>
    </div>
  )
}

export default Todo