import { useAppDispatch } from "../hooks/Common"
import { createTask } from "../feature/task/taskSlice"
import React , {useState} from "react";
import { TaskInterface } from "../interface/Task.Interface";
import {v4 as uuid} from 'uuid'
import { useNavigate , Link } from "react-router-dom";



const TaskForm: () => JSX.Element = () => {
  
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [newTask , setNewTask ] = useState<TaskInterface>({
    title:'',
    description:'',
    author:''
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let {name , value} = e.target
    setNewTask({
      ...newTask,
      [name]: value
    })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    dispatch(createTask({
      ...newTask,
      id: uuid()
    }))
    navigate('/')
  }

  return(
    <div>
      <h1>Task Form</h1>
      <Link to='/'>Go back</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="title" onChange={handleChange} />
        <input type="text" name="description" placeholder="description" onChange={handleChange} />
        <input type="text" name="author" placeholder="author" onChange={handleChange} />
        <button>Save</button>
      </form>
    </div>
  )
}

export default TaskForm