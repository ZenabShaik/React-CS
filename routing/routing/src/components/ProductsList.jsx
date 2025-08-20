import React from 'react'

function ProductsList(props) {
    const {productsList}=props;

     return (
    <>
        {productsList.length===null?<h2>Loading...</h2>:productsList.map((product)=>{
            return(<div className="product">
              <img src={product.image} alt="prodcut_img"
               className='product_image'/>
               <div className = "product_meta">
                  <p className='product_title'>{product.title}</p>
                  <p className='price'>{product.price}</p>
               </div>
            </div>)
          })
          }
    </>
  )
}

export default ProductsList