import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './apiReducer'
export default configureStore({
  reducer: {
    api:apiReducer
},
})