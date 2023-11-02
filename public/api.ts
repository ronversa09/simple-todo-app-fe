import { ITask } from "@/types/tasks";

const baseUrl = 'http://localhost:8000';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/todos`, { cache: 'no-store' });
    const todos = await res.json();
    return todos;
}


export const addTodo = async (todo: ITask) : Promise<ITask> => {
    const res = await fetch(`${baseUrl}/todos/add?id=${todo.id}&text=${todo.text}`);
    const newTodo = await res.json();
    return newTodo;

}

export const editTodo = async (todo: ITask) : Promise<ITask> => {
    const res = await fetch(`${baseUrl}/todos/edit?id=${todo.id}&text=${todo.text}`);
    const updatedTodo = await res.json();
    return updatedTodo;

}

export const deleteTodo = async (id: number) : Promise<void> => {
    await fetch(`${baseUrl}/todos/remove?id=${id}`);
}