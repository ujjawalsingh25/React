import { createContext, useContext} from "react";

export const ToDoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "Todo Msg",
            completed : false,

        }, {}, {}
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})


// Custom HOOK
export const useToDo = () => {
    return useContext(ToDoContext)
}

// export Procider
export const ToDoProvider = ToDoContext.Provider