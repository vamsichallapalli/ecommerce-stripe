import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart:(state,action)=>{
        const item = state.products.find(item=>item.id === action.payload.id)
        if(item){
            item.count = action.payload.count
        }
        else{
            state.products.push(action.payload)
        }

    },
    removeItem:(state,{payload}) =>{
        state.products= state.products.filter(item =>item.id !== payload.id)
    },
    resetCart:(state)=>{
        state.products = []
    }
  }
})

// Action creators are generated for each case reducer function
export const {addToCart,removeItem,resetCart } = cartSlice.actions

export default cartSlice.reducer