import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';


function AddTodoRedux({ todoId, setTodoId }) {
    const [input, setInput] = useState("");
    
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const existingTodo = todos.find(todo => todo.id === todoId);

    useEffect(() => {
        if (existingTodo) {
            setInput(existingTodo.todoMsg);
        } else {
            setInput("");
        }
    }, [todoId, existingTodo]);

    const handleAddOrUpdateTodo = (event) => {
        event.preventDefault();
        if (todoId) {
            dispatch(updateTodo({ id: todoId, todoMsg: input }));
            setTodoId(""); 
        } else {
            dispatch(addTodo(input));
        }
        setInput("");
    };


  return (
    <>    
        <div className="mt-[2%] text-3xl font-bold text-center">
            Manage Your Todos using Redux
        </div>
        <form onSubmit={handleAddOrUpdateTodo} className='flex flex-row  p-6 justify-center'>
            <input 
                className='w-2/5 bg-white font-bold text-gray-700 px-8 rounded-2xl 
                rounded-tl-4xl rounded-bl-2xl rounded-tr-2xl rounded-br-4xl' 
                placeholder={todoId ? '' : 'Write your todos to add...'}
                value={input}
                onChange={event => setInput(event.target.value)}
            /> 
            <button type='submit' 
                className='outline-none rounded-sm bg-[#2f72ed] text-white font-bold shadow-lg px-2 py-2 
                transition-all duration-100 hover:bg-[#1d5cd0] hover:shadow-xl rounded-tl-4xl rounded-bl-2xl 
                rounded-tr-2xl rounded-br-4xl'
            >
                {todoId ? 'Update Todo' : 'Add Todo'}
            </button>
        </form>
    </>
  )
}

export default AddTodoRedux;