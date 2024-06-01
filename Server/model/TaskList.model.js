import mongoose from 'mongoose';


function formatDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }

const taskListschema = new mongoose.Schema({
    task_name: {
        type: String,
        required: true
    },
    task_priority: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'active'
    },
    date: {
        type: String,
    default: formatDate, 
    }
})

const taskList = mongoose.model('taskList', taskListschema);

export default taskList;