import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   fullScreen:false
}

export const fullScreenSlice = createSlice({
  name: 'fullScreen',
  initialState,
  reducers: {
    openFullScreen: (state) => {
      state.fullScreen = true;
      
    },
    closeFullScreen: (state) => {
        state.fullScreen = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const {openFullScreen,closeFullScreen} = fullScreenSlice.actions

export default fullScreenSlice.reducer