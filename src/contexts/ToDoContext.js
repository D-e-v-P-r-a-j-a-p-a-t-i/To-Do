import { createContext, useContext } from "react";

export const ToDoContex = createContext({
    dev:"hello",
    todos: [
        {
            id: 1,
            title: "To DO", 
            completed: false
        }
    ],
    addToDo: (todo) => {},
    editToDo: (id, todo) => {},
    deleteToDo: (id) => {},
    toggleComplete: (id) => {}
})

export const useToDo = () => useContext(ToDoContex)

export const ToDoProvider = ToDoContex.Provider