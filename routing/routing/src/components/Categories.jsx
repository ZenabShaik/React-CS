import React from 'react'
import { usePaginationContext } from './contexts/PaginationContext';
function Categories(props) {
    const {categories,setCurrentCategory}=props;  
    const {setPageNum} = usePaginationContext();
    
  return (
    <>
        <button className='category_option' onClick={()=>{setCurrentCategory('All Categories');setPageNum(1)}}>All Categories</button>
        {categories.map((each)=>
        {return <button className='category_option' onClick={()=>{setCurrentCategory(each);console.log(each);setPageNum(1)}}>{each}</button>}
        )}
    </>
  )
}

export default Categories