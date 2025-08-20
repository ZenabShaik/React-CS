/* import Routing from './poc/Routing' */

import {Route, Routes, Navigate} from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './components/Home'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails'
import PageNotFound from './components/PageNotFound'
import User from './components/User'
import PaginationContextProvider from "./components/contexts/PaginationContext" 
import './App.css'

function App() {

  return (
    <PaginationContextProvider>
      {/* <Routing></Routing> */}
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </PaginationContextProvider>
  )
}

export default App
