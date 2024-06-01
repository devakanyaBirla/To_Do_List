import taskList from "../model/TaskList.model.js";

export const Add = async (request, response, next) => {
  try {
    // const taskList = new taskList(request.body);
    // await taskList.save();
    console.log(request.body);
    await taskList.create(request.body);
    let result = await taskList.find();
    return response.status(200).json({ message: "Task Added", data: result });
  }
  catch (err) {
    console.log(err);
    return response.status(500).json({ error: "Internal server error...", err });
  }
}

export const saveInBulk = async (request, response, next) => {
  try {
    await taskList.insertMany(request.body);
    return response.status(200).json({ message: "All categories saved." });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ error: "Internal server error...", err });
  }
}

export const getAllTask = (request, response, next) => {
  taskList.find()
    .then(result => {
      return response.status(200).json({ Message: "All Task List", data: result });
    })
    .catch(err => {
      console.log(err);
      return response.status(500).json({ Error: "Internal Server Error" });
    });
}

export const updateStatus = async (request, response, next) => {
  try {
    const { _id, status } = request.body;
    let result = await taskList.updateOne({ _id }, { status })

    console.log(result);
    result = await taskList.find();
    return response.status(200).json({ Message: "Task updated successfully", data: result });

  } catch (error) {
    console.log(error);
    return response.status(500).json({ Message: "Internal Error" });
  }
}