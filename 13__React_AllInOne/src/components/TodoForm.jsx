import React, { useState } from 'react'
import { useTodo } from '../contexts/local-storage';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodos } = useTodo();

    const handleAddTodo = (event) => {
        event.preventDefault();
        
        if(!todo) return
        addTodos({todo, completed :false})
        setTodo("")
    }

  return (
    <>        
        <div className="mt-[2%] text-3xl font-bold text-center">Manage Your Todos</div>
        <form onSubmit={handleAddTodo} className='flex flex-row  p-6 justify-center'>
            <input 
                className='w-2/5 bg-white font-bold text-gray-700 px-8 rounded-2xl 
                rounded-tl-4xl rounded-bl-2xl rounded-tr-2xl rounded-br-4xl' 
                placeholder='Write your todos to add...'
                value={todo}
                onChange={event => setTodo(event.target.value)}
            /> 
            <button type='submit' 
                className='outline-none rounded-sm bg-[#2f72ed] text-white font-bold shadow-lg px-2 py-2 
                transition-all duration-100 hover:bg-[#1d5cd0] hover:shadow-xl rounded-tl-4xl rounded-bl-2xl 
                rounded-tr-2xl rounded-br-4xl'
            >
                Add Todo
            </button>
        </form>
    </>
  )
}

export default TodoForm;