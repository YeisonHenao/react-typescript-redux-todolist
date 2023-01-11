import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name:'tasks',
  initialState:[],
  reducers:{
    addCounter:(state,actions) => {
      console.log("hello world! " , actions);
    }
  }
})

export const {addCounter} = taskSlice.actions

export default taskSlice.reducer