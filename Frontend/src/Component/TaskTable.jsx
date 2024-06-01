export default function ({ handleChangeStatus, defaultStatus, taskList, priorityList }) {

    return <>
        <div className="container bg-dark mt-4 text-light">
            <table className="table table-stripped text-center">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Task Name</th>
                        <th>Created date</th>
                        <th>Priority</th>
                        <th>Active / Deactive</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !taskList.length ? <tr>No Task Assigned</tr> :
                            taskList.filter(task => task.status === defaultStatus)
                                .sort((a, b) => a.task_priority < b.task_priority ? 1 : -1)
                                .map((task, index) => {
                                    return <>
                                        <tr className={priorityList.find(priority => priority.priorityId === task.task_priority).priorityClass}>
                                            <td>{index + 1}</td>
                                            <td>{task.task_name}</td>
                                            <td>{task.date}</td>
                                            <td>{priorityList.find(priority => priority.priorityId === task.task_priority).priorityValue}</td>
                                            <td>
                                                {
                                                    defaultStatus === 'active' ?
                                                        <button onClick={handleChangeStatus} value={task._id} name="deactive" className="btn btn-outline-danger">Deactive</button>
                                                        :
                                                        <button onClick={handleChangeStatus} value={task._id} name="active" className="btn btn-outline-success">Active</button>
                                                }
                                            </td>
                                        </tr>
                                    </>
                                })
                    }
                </tbody>
            </table>
        </div>
    </>
}