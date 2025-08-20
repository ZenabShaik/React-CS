import React, {useState,useEffect} from 'react'
import { Link,Navigate,Routes,Route,useParams } from 'react-router-dom'
function Routing() {
  return (
    <div>
        <h1>Routing</h1>
    <nav>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/list'>List</Link></li>
        </ul>
    </nav>

    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
         <Route path='/about/*' element={<About></About>}></Route> 
          <Route path='/list' element={<List></List>}></Route>
          <Route path='/home' element={<Navigate to='/'></Navigate>}></Route>
          <Route path='user/:id' element={<User></User>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    </div>
  )
}

function Home(){
    return <h1>Home Page</h1>
}
function About(){
    return (
        <>
    <h1>About Page</h1>
    <Routes>
        <Route path='company' element={<Company></Company>}></Route>
        <Route path='founder' element={<Founder></Founder>}></Route>
    </Routes>
    </>
)
}

function Company(){
    return <h1>Noora Tech</h1>
}
function Founder(){
    return <h1>Noora Shaik</h1>
}
function List(){
    return <h1>List Page</h1>
}

function NotFound(){
    return <h1>Not Found</h1>
}

function User(){
    const params=useParams()
    const [userData,setUser]=useState(null)
    useEffect(
        ()=>{
            (async function () {
                const resp=await fetch(`https://fakestoreapi.com/users/${params.id}`)
                const data=await resp.json()
                setUser(data)
            })()
        }
    ,[])
     console.log('rendered')
    return(
        <>
        {userData==null?<h1>Loading...</h1>:<>
        <h2>Name: {userData.username}</h2>
        <h2>city: {userData.address.city}</h2>
        <h2>phone: {userData.phone}</h2>
        </>}
        </>
    )
}

export default Routing