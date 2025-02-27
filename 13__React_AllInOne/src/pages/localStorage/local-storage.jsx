import React, { useEffect, useState } from 'react'
import { TodoProvider } from '../../contexts/local-storage';
import TodoForm from '../../components/TodoForm';
import TodoItem from '../../components/TodoItem';

function LocalStorage() {
    const [todos, setTodos] = useState([]);

    const addTodos = (todo) => {
        setTodos(prevTodos => [{id: Date.now(), ...todo}, ...prevTodos])
    }

    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id))
    }

    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map(
            prevTodos => (prevTodos.id === id) ? todo : prevTodos
        ))
    }

    const toggleComplete = (id) => {
        setTodos(prev => prev.map(
            prevTodos => (prevTodos.id === id) ? {...prevTodos, completed: !prevTodos.completed} : prevTodos
        ))
    }

    // ----------------  Local Storage  -------------
    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))
        if(todos && todos.length > 0) setTodos(todos)
    },[])
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))   // "key" -->> "todos" should same as .getItem(upperCode)
    }, [todos])
    // -----------------------------------------------------

    return (
        <TodoProvider value={{todos, addTodos, deleteTodo, updateTodo, toggleComplete}}>
            <TodoForm />

            {todos.map((todoIter) => (
                <div key={todoIter.id} className="w-full" >
                    <TodoItem todo={todoIter}/>
                </div>
            ))}

        </TodoProvider>
    )
};

export default LocalStorage;