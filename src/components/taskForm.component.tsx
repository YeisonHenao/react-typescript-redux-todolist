import { useAppDispatch, useAppSelector } from "../hooks/Common";
import { createTask, editTask } from "../feature/task/taskSlice";
import React, { useState, useEffect } from "react";
import { TaskInterface } from "../interface/Task.Interface";
import { v4 as uuid } from "uuid";
import { useNavigate, Link, useParams } from "react-router-dom";

const TaskForm: () => JSX.Element = () => {
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [newTask, setNewTask] = useState<TaskInterface | any>({
    title: "",
    description: "",
    author: "",
  });

  useEffect(() => {
    let id: any = params.id;
    if (id) {
      setNewTask(tasks.find((task) => task.id === id));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(newTask));
    } else {
      dispatch(
        createTask({
          ...newTask,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  return (
    <div>
      <h1>Task Form</h1>
      <Link to="/">Go back</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={newTask.title}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={newTask.description}
        />
        <input
          type="text"
          name="author"
          placeholder="author"
          onChange={handleChange}
          value={newTask.author}
        />
        <button>Save</button>
      </form>
    </div>
  );
};

export default TaskForm;
