import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({ //！！！相当于创建store，actions + reducers
  name: 'item',
  initialState: {
    value: []
  },
  reducers: {
 
    addtocart: (state,action) => {
        if(state.value.find(d=>d.id===action.payload.id)){
            state.value.find(d=>d.id===action.payload.id).Qt+=1
        }else {
            state.value=[...state.value,action.payload]
        }
        return 
    },
    addone: (state,action) => {    
      state.value.find(d=>d.id===action.payload).Qt+=1
      return
    }  
    ,
    minusone: (state,action) => {
        let qt = state.value.find(d=>d.id===action.payload).Qt
        if(qt>1){
          state.value.find(d=>d.id===action.payload).Qt-=1
        }else{
          alert('The quantity cannot be less than 1!')
          return
        } 
    },
    removeitem: (state,action) =>{ 
      state.value = state.value.filter(d => d.id !== action.payload)
      return
    },
    clearitems:(state)=>{
      state.value=[]
      return
    }

  }
})
// Action creators are generated for each case reducer function
export const { addtocart,addone,minusone,removeitem,clearitems } = itemSlice.actions


export function checkout_show(items){
  let subtotal = 0
  let taxrate = 0.112
  for(let i of items){
    subtotal+=i.price*i.Qt
  }
  let tax = Number((subtotal*taxrate).toFixed(2))
  let total = Number((subtotal+tax).toFixed(2))
  subtotal = Number(subtotal.toFixed(2))
  taxrate = (Math.round(taxrate*10000))/100+'%'
  return {'taxrate':taxrate,'tax':tax,'subtotal':subtotal,'total':total}
}


export default itemSlice.reducer