import { useState } from "react";

export default function ({ defaultStatus, handleTask, priorityList, setDefaultStatus, taskList
  // , setTask, task
}) {
  const [task, setTask] = useState({ task_name: "", task_priority: 0 });
  return <>
    <div className="container text-light bg-danger rounded mt-5 col-8 border p-4">
      <div>
        <div className="col-12 d-flex justify-content-around">
          <div className="form-group col-5">
            <label for="email">Email address : </label>
            <input type="text" placeholder="Task name" className="form-control" onChange={(e) => setTask({ ...task, task_name: e.target.value })} />
          </div>
          <div className="form-group col-5">
            <label for="email">Task Priority : </label>
            <select className="form-select" onClick={(e) => setTask({ ...task, task_priority: e.target.value })}>
              <option defaultChecked>Select Option</option>
              {
                priorityList.map((priority, index) => {
                  return <>
                    <option value={priority.priorityId} key={index}>
                      {priority.priorityValue}
                    </option>
                  </>
                })
              }
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 col-12">
          <button type="button" onClick={() => handleTask(task)} className="btn btn-primary col-4">Add Task</button>
        </div>
      </div>


    </div>
    <div className="conatiner">
      <div className="row mt-3 gap-2">
        <button disabled={defaultStatus === "active" ? true : false}
          onClick={() => setDefaultStatus("active")} className="btn btn-success col-md-1 ms-5">Active
          ({taskList.filter(task => task.status === "active").length})
        </button>

        <button disabled={defaultStatus === "deactive" ? true : false}
          onClick={() => setDefaultStatus("deactive")} className="btn btn-warning col-md-1">Deactive
          ({taskList.filter(task => task.status === "deactive").length})
        </button>
      </div>
    </div>
  </>
}