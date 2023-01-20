import React from 'react'
import './FeaturedProduct.css'
import Card from '../Card/Card'
import useFetch from '../Hooks/useFetch'
const FeaturedProduct = ({type}) => {
  const {data,loading} = useFetch(`/products/?populate=*&[filters][type][$eq]=${type}`)
 
  return (
    <div className='featured-container'>
      <div className="featured-top"> 
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className='featured-products'>
        {loading?"loading" : data?.map(item=>{
          return (
            <Card item = {item} key = {item.id}/>
          )
         })}
              
        </div>
    </div>
  )
}

export default FeaturedProduct
