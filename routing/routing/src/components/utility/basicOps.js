export default function basicOps(products,searchTerm,sortDir,currentCategory,pageNum,pageSize){
    //copy paste all the filtering,sorting and categorization code here
    // from Home.jsx
    let filteredArray=products 
  if (searchTerm!=''){
    filteredArray=filteredArray.filter((product)=>{
        let lowerSearchTerm=searchTerm.toLowerCase()
        let lowerTitle=product.title.toLowerCase()
        return lowerTitle.includes(lowerSearchTerm)
    })
  }
 /* sorting */
  let filteredSortedArray=filteredArray 
  if (sortDir!=0){
    filteredSortedArray=filteredSortedArray.sort(inComparator)
  }else{
    filteredSortedArray=filteredSortedArray.sort(decComparator)
  }

  /* categorization */

  let filteredSortedArrayGroupBy=filteredSortedArray
  console.log(filteredSortedArrayGroupBy) 
  if (currentCategory!=='All Categories'){
    console.log(`current category ${currentCategory}`)
    filteredSortedArrayGroupBy=filteredSortedArrayGroupBy.filter((product)=>{
      return product.category==currentCategory
    })
  } 

  /* pagination */
  let totalPages=filteredSortedArrayGroupBy.length/pageSize
    let startIndex=[pageNum-1]*pageSize 
    let endIndex=startIndex+pageSize
    filteredSortedArrayGroupBy=filteredSortedArrayGroupBy.slice(startIndex,endIndex)
    return {filteredSortedArrayGroupBy,totalPages}; 

} 





function inComparator(product1,product2){
  if (product1.price>product2.price){
    return 1
  }else{
    return -1
  }
}
function decComparator(product1,product2){
  if (product1.price<product2.price){
    return 1
  }else{
    return -1
  }
}