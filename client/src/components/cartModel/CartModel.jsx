import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './CartModel.css'
import { useSelector,useDispatch } from 'react-redux';
import { removeItem,resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import axios from "axios"
const CartModel = () => {
   const dispatch = useDispatch()
    const products = useSelector(state =>state.cart.products)
    const totalPrice = () =>{
     let total = 0
      products.forEach(item => {
        total = total + item.count * item.price
      })
      return total
    }
    const stripePromise = loadStripe('pk_test_51MRy7YSEKToljahJGgkxPRFqmml5F8woitsicqzLbREvd4yihmjaKXXt0tuQzG3c87ydiRIsEwy5Mqm5VtPT6dF000MRBJZhId');

    const handlePayment = async() =>{
   try {
    const stripe = await stripePromise
    const res = await axios.post("http://localhost:1337/api/orders",{products},{
      headers:{
        Authorization:"bearer cccbfda300dd98172fcf401d6dd37e2cb5b7d42579811f0cbf4d49c9697a06cb2fa603b387961cbc0b150688da9414bbc320a513d4b79945b3c5077f2191626bdc5a322cc590117a78c1bb4303842d057a8b026aacb7eac98dca873d25a4a17eff4916345b42f1a648bb5d7f42e6950d062550fe6f858f4ca3a866508463047a" 
    }
    
    });

    await stripe.redirectToCheckout({
      sessionId:res.data.stripeSession.id
    })
   } catch (error) {
    console.log(error.response.data)
    
   }
    }
  return (
    <div className='cart'>
      <h1 >Products in your cart</h1>
      {products.map(item=>{
        return(
            <div className='Caitem' key={item.id}>
              <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
              <div className="cartProduct">
                <h1>{item.title}</h1>
                <p className='cpdesc'>Lorem  necessitatibus dolor similique doloremque. Praese</p>
                <div className="price">
                    {item.count} x {item.price}
                </div>
              </div>
              <DeleteOutlineIcon className='deleteIcon' onClick={()=>dispatch(removeItem({id:item.id}))}/>
            </div>
        )
      })}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>Rs {totalPrice()}</span>
      </div>
      <button className='checkout' onClick = {handlePayment}>PROCEED TO CHECKOUT</button><br/>
      <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default CartModel
