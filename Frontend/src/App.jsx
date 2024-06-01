import Header from './Component/Header'
import FormArea from './Component/FormArea'

import './App.css'
import { useEffect, useState } from 'react'
import TaskTable from './Component/TaskTable';
import axios from 'axios';
function App() {
  const [defaultStatus, setDefaultStatus] = useState("active");
  const [taskList, setTaskList] = useState([]);
  // const [task, setTask] = useState({ task_name: "", task_priority: 0 });

  const priorityList = [
    { priorityId: 1, priorityValue: "Low", priorityClass: "primary" },
    { priorityId: 2, priorityValue: "Medium", priorityClass: "warning" },
    { priorityId: 3, priorityValue: "High", priorityClass: "danger" },
  ]

  useEffect(() => {
    axios.get("http://localhost:3000/TaskList/getAllTask")
      .then(response => {
        console.log("response", response.data.data);
        setTaskList(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleTask = (task) => {
    console.log(task);
    axios.post('http://localhost:3000/TaskList/addTask', task)
      .then(response => {
        console.log(response.data.data);
        setTaskList(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleChangeStatus = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { value, name } = e.target;
    axios.put("http://localhost:3000/TaskList/updateStatus", { _id: value, status: name })
      .then(response => {
        console.log(response);
        setTaskList(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <Header />
      <FormArea priorityList={priorityList} handleTask={handleTask} defaultStatus={defaultStatus} setDefaultStatus={setDefaultStatus} taskList={taskList} />
      <TaskTable handleChangeStatus={handleChangeStatus} taskList={taskList} priorityList={priorityList} defaultStatus={defaultStatus} />
    </>
  )
}

export default App
