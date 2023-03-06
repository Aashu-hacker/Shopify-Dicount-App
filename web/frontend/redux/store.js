import { configureStore } from '@reduxjs/toolkit'
import fullScreenReducer from './fullScreenReducer'

export const store = configureStore({
    reducer: {
        fullScreen:fullScreenReducer,
      },
})