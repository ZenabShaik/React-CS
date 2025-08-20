import React from 'react'
import { useState, useEffect } from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import ProductsList from './ProductsList'; 
import Categories from './Categories';
import basicOps from './utility/basicOps';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePaginationContext } from './contexts/PaginationContext';


  function Home() {
  const [searchTerm,setSearchTerm]=useState("");
  const [products,setProducts] = useState([]);
  const [sortDir,setSortDir]=useState(0);
  const [categories,setCategory]=useState([]);
  const [currentCategory,setCurrentCategory]=useState('All Categories')
  useEffect(()=>{
    (async function (){
      const resp = await fetch(`https://fakestoreapi.com/products`)
      const productData = await resp.json();
      setProducts(productData);
    })()
  },[]); 

  const {pageNum,setPageNum,pageSize,setPageSize} =usePaginationContext();

  //fetch categories
  const obj=basicOps(products,searchTerm,sortDir,currentCategory,pageNum,pageSize);

  const filteredSortedArrayGroupBy=obj.filteredSortedArrayGroupBy;
  const totalPages=obj.totalPages;
  useEffect(()=>{
    (async function() {
       const resp=await fetch('https://fakestoreapi.com/products/categories')
      const data=await resp.json()  
      setCategory(data) 
    })()
  },[])



  return (
    <>
      <header className="nav_wrapper">
        <div className='search_sortWrapper'>
        <input 
            className="search_input"
            type='text'
            value={searchTerm}
            onChange={(e)=>{ setSearchTerm(e.target.value);setPageNum(1)}} />
            <div className="search_contaiber">
              <FaArrowAltCircleUp style={{color:'white'}} fontSize='large'
              onClick={()=>{setSortDir(1);setPageNum(1)}}/>
              <FaArrowAltCircleDown style={{color:'white'}} fontSize='large' onClick={()=>{setSortDir(-1);setPageNum(1)}}/>
            </div>
        </div>     
        <div className="icons-container">
          </div>     
      </header>
      <div className='category_wrapper'>
        <Categories categories={categories} setCurrentCategory={setCurrentCategory}></Categories>
      </div>

      <main className="product_wrapper">
        <ProductsList productsList={filteredSortedArrayGroupBy}></ProductsList>
      </main>
      <div className='pagination_wrapper'>
        <button className='pagination_button' onClick={()=>setPageNum(pageNum-1)} disabled={pageNum===1?true:false}><MdKeyboardArrowLeft fontSize='large'></MdKeyboardArrowLeft></button>

      </div>
      <div className='pagenum'>{pageNum}</div>
      <button onClick={()=>{
      setPageNum(pageNum+1)}} disabled={pageNum==totalPages}><MdKeyboardArrowRight fontSize='large'></MdKeyboardArrowRight></button>
    </>
  )
}

export default Home