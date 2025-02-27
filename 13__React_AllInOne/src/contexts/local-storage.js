import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "Todo Msg",
            completed : false,

        }, {}, {}
    ],
    addTodos: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}