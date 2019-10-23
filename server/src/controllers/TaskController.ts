import TaskRepository from '../repositories/TaskRepository'

export const tasks = async(_req:any, res:any): Promise<void> => {
    const tasks = await TaskRepository.tasks();
    res.json(tasks);
}

export const getTask = async(req:any, res:any): Promise<void> => {
    const task = await TaskRepository.getTask(req.params.id);
    res.json(task);
}

export const createTask = async(req:any, res:any): Promise<void> => {
    try {
        await TaskRepository.createTask(req.body);
        res.json({success: true, message: "Tarea creada"})
    } catch(err) {
        res.json({success: false, code: err.errors})
    }
}

export const updateTask = async(req:any, res:any): Promise<void> => {
    const { id } = req.params;

    try {
        await TaskRepository.updateTask(id, req.body);
        res.json({success: true, message: "Tarea modificada"})
    } catch (err) {
        res.json({success: false, code: err.errors})
    }
}

export const deleteTask = async(req:any, res:any): Promise<void> => {
    const { id } = req.params;
    try {
        await TaskRepository.deleteTask(id);
        res.json({success: true, message: "Tarea eliminada"})
    } catch (err) {
        res.json({success: false, code: err.errors})
    }
}