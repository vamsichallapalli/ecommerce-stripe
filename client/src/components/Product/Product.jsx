import React from 'react'
import './Product.css'
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
const Product = () => {
  const [index, setIndex] = React.useState("img")
  const [count,setCount] = React.useState(1)
  const  id = parseInt(useParams().id)
  const dispatch = useDispatch()
  const {data,loading} = useFetch(`/products/${id}?populate=*`);
  
  return (
    <div className='product-main-container'>
      <div className="singalProductLeft">
        <div className="singelImages">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setIndex("img")} />
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setIndex("img")} />
        </div>
        <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[index]?.data?.attributes?.url} alt="" className='product-main-image' />
      </div>
      <div className="singalProductRight">
        <h1>{data?.attributes.title}</h1>
        <span>{data?.attributes.price}</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere numquam temporibus, officia eveniet eaque ab nisi dolore neque minus inventore odio harum placeat laborum nihil, repudiandae molestiae fugiat! Perspiciatis, debitis.</p>
        <div className="countItems">
          <button onClick={e=>setCount(prev=>prev === 1 ? 1 : prev- 1)}>-</button>
          <span>{count}</span>
          <button onClick={e=>setCount(prev=> prev + 1)}>+</button>
        </div>
        <div>
        <Button variant="outlined" startIcon={ <AddShoppingCartIcon />} onClick = {() => dispatch(addToCart({
          id:data.id,
          title:data.attributes.title,
          img:data.attributes.img.data.attributes.url,
          price:data.attributes.price,
          count
        }))}>
          ADD TO CART
        </Button>
        </div>
        
        <div className='userChoice'>
        <FavoriteBorderIcon/>
        <span>Add  to wishlst</span>
        <BalanceIcon/>
        <span>compare to product</span>
        </div>
        <div className="info">
        <span>Vendor:polo</span>
        <span>Product TYPE : T-shirt</span>
        <span>Tag:T-Shirt </span>
      </div>
      <hr/>
      <div className="details">
        <span>DESCRIPTION</span>
        <hr/>
        <span>ADDITIONAL INFORMATON</span>
        <hr/>
        <span>FAQ</span>
      </div>
      </div>
      

    </div>
  )
}

export default Product