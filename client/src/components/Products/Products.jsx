import React, { useState } from 'react'
import './Products.css'
import List from '../List/List'
import Model from "../MobileModel/Model"
import useFetch from '../Hooks/useFetch'
import { useParams } from 'react-router-dom'
const Products = () => {
  const [subcat,setSubcat] = useState([])
  const catId = parseInt(useParams().id)
 
 const [maxPrice,setMaxPrice] = useState(3000)
 const [sort,setSort] = useState("asc")
 const {data} = useFetch(`/sub-categories?filters[categories][id][$eq]=${catId}`)
 const handleChange = (event) =>{
  const value = event.target.value
  const isChecked = event.target.checked
  setSubcat(isChecked ? [...subcat,value]:subcat.filter(item=> item !== value))
 }
 console.log(subcat)
  return (
    <div className='all-products-container'>
      <div className="mobile-short-filter">
          <Model/>
      </div>
      <div className="filter-container">
        <div className="filter-item">
          <h2>Product Category</h2>
          {data?.map(item=>(
               <div className="inputItem" key = {item.id} >
               <input type="checkbox" id={item.id} value = {item.id} onChange={handleChange}/>
               <label htmlFor={item.id}>{item.attributes.title}</label>
             </div>
          ))}
          
          
        </div>
        <div className="filter-item">
          <h2>Filter by price</h2>
          <span>0</span>
           <input type="range" min ={0} max={3000} onChange ={e=>setMaxPrice(e.target.value)} />
           <span>{maxPrice}</span>
        </div>
        <div className="filter-item">
          <h2>sort by</h2>
          <div className="inputItem">
               <input type="radio" id = "asc" value="asc" name = "price" onChange={e=>setSort(e.target.value)} />
               <label htmlFor="lower">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
               <input type="radio" id = "desc" value="desc" name = "price" onChange={e=>setSort(e.target.value)}/>
               <label htmlFor="lower">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="all-product-list">
      <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId = {catId} subcat={subcat} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products