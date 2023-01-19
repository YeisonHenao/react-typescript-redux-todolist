import { createSlice } from "@reduxjs/toolkit";
import { TaskInterface } from "../../interface/Task.Interface";

const initial_state: TaskInterface[] = [
  {
    id: "1",
    title: "title 1",
    description: "description 1",
    author: "Yeison",
    state: false,
  },
  {
    id: "2",
    title: "title 2",
    description: "description 2",
    author: "Alexander",
    state: false,
  },
];

const taskSlice = createSlice({
  name: "tasks",
  initialState: initial_state,
  reducers: {
    createTask: (state, action) => {
      let data: TaskInterface = action.payload;
      state.push(data);
    },
    deleteTask: (state, action) => {
      let id = state.find((task) => task.id === action.payload);
      if (id) {
        state.splice(state.indexOf(id), 1);
      } else {
        console.log("#####Task no found#####");
      }
    },
    editTask: (state, action) => {
      const {id, title, description, author} = action.payload
      const foundTask = state.find(task => task.id === id)

      if(foundTask){
        foundTask.title = title
        foundTask.description = description
        foundTask.author = author
      }
    }
  },
});

export const { createTask, deleteTask , editTask } = taskSlice.actions;

export default taskSlice.reducer;
