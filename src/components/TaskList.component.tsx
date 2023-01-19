import { useAppSelector, useAppDispatch } from "../hooks/Common";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { deleteTask , editTask } from "../feature/task/taskSlice";

const TaskList = () => {
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> | any = (
    id: number
  ) => {
    dispatch(deleteTask(id));
  };

  const handleEdit: React.MouseEventHandler<HTMLButtonElement> | any = (id:number) => {
    navigate(`/edit-task/${id}`)
  }

  return (
    <div>
      <h1>List of Task</h1>
      <h4>Total tasks : {tasks.length}</h4>
      <br />
      <br />
      <Link to="/create">Create task</Link>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.author}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <button onClick={() => handleEdit(task.id)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
