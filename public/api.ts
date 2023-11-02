import { ITask } from "@/types/tasks";

const baseUrl = 'https://simple-todo-app-be.vercel.app/api/api';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/todos`, { cache: 'no-store' });
    const todos = await res.json();
    return todos;
}


export const addTodo = async (todo: ITask) : Promise<ITask> => {
    const res = await fetch(`${baseUrl}/todos/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })

    const newTodo = await res.json();
    return newTodo;
}

export const editTodo = async (todo: ITask) : Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks/edit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })

    const updatedTodo = await res.json();
    return updatedTodo;
}

export const deleteTodo = async (id: number) : Promise<void> => {
    await fetch(`${baseUrl}/todos/remove?${id}`, {
        method: 'DELETE'
    })
}