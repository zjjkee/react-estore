import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './pageSlice'
import itemRuducer from './itemslice'
export default configureStore({
  reducer: {
    page: pageReducer,
    item: itemRuducer
  }
})