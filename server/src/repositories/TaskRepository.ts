import Task, { ITask } from '../models/Task'

class TaskRepository {

    async tasks() {
        return await Task.find().sort({createdAt: 'asc'});
    }

    async getTask(id:number) {
        return await Task.findById(id);
    }

    async createTask(task:ITask) {
        const { title, description } = task;
        const newTask = new Task({ title, description });
        
        return await newTask.save();
    }

    async updateTask(id:number, task:ITask) {
        return await Task.findByIdAndUpdate(id, task, {new: true});
    }

    async deleteTask(id:number) {
        return await Task.findByIdAndRemove(id);
    }
}

export default new TaskRepository;