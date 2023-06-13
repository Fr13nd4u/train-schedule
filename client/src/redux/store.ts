import { configureStore } from '@reduxjs/toolkit'
import trainsReducer from './slices/trains';

const reducer = {
  trains: trainsReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;