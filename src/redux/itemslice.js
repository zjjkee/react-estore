import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({ //！！！相当于创建store，actions + reducers
  name: 'item',
  initialState: {
    value: []
  },
  reducers: {
 
    addtocart: (state,action) => {
        if(state.value.find(d=>d.id==action.payload.id)){
            state.value.find(d=>d.id==action.payload.id).Qt+=1
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
            return
        } 
    }

  }
})




// Action creators are generated for each case reducer function
export const { addtocart,addone,minusone } = itemSlice.actions

export default itemSlice.reducer