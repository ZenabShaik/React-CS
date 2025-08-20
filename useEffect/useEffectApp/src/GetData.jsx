import React from 'react'
import {useState,useEffect} from 'react'

function GetData() {
      const [data, setData] = useState(null)
    
      useEffect(
        function fn(){
        console.log('UseEffect Ran')
        async function fetchData() {
            const resp=await fetch('https://jsonplaceholder.typicode.com/users/1')
            const user=await resp.json()
            setData(user)
            console.log(user);
      }
    fetchData()},[])
  return (
     <>
      {data===null?<h1>Placeholder loading the data</h1>:
      <><h2>name: {data.name}</h2>
        <h2>username: {data.username}</h2>
      </>}
      
    </>
  )
}

export default GetData