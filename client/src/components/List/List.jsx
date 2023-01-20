import React from 'react'
import Card from '../Card/Card'
import useFetch from '../Hooks/useFetch'
import './List.css'
const List = ({catId,subcat,maxPrice,sort}) => {
  const {data,loading} = useFetch(`/products?populate=*&filters[categories][id][$eq]=${catId}${subcat.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}
  &[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)
  console.log(data)
  return (
    <div className='list-container'>
        {loading?"loading":data?.map(ci=>{
            return(
           <Card item={ci} key={ci.id}/> 
            )
        })}
      
    </div>
  )
}

export default List
