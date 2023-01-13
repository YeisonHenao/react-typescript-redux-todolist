import { createSlice } from "@reduxjs/toolkit";
import {TaskInterface} from "../../interface/Task.Interface";

const initial_state: TaskInterface[] = [
  {
    id:"1",
    title:'title 1',
    description: 'description 1',
    author: 'Yeison',
    state:false
  },
  {
    id:"2",
    title:'title 2',
    description:'description 2',
    author:'Alexander',
    state:false
  }
]

const taskSlice = createSlice({
  name:'tasks',
  initialState:initial_state,
  reducers:{
    createTask: (state, action) => {
      let data: TaskInterface = action.payload
      state.push(data)
    }
  }
})

export const {createTask} = taskSlice.actions

export default taskSlice.reducer