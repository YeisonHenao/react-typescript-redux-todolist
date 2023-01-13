import { useAppSelector } from "../hooks/Common"
import { Link } from "react-router-dom"

const TaskList = () => {

  const tasks = useAppSelector(state => state.tasks)
  console.log(tasks)

  return(
    <div>
      <h1>List of Task</h1>
      <h4>tasks : {tasks.length}</h4>
      <br />
      <br />
      <br />
      <Link to='/create'>Create task</Link>
      {
        tasks.map(task => {
          return(
            <div key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>{task.author}</p>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default TaskList