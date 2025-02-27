import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleComplete, toggleEdit } from '../features/todo/todoSlice';


function TodoListRedux({ todo, todoId, setTodoId }) {
    const [complete, setComplete] = useState(false);

    const dispatch = useDispatch();
   
    const handleTaskCompleted = () => {
        setComplete(prev => !prev);
        dispatch(toggleComplete(todo.id));
    }

    const handleToggleEdit = () => {
        dispatch(toggleEdit(todo.id));  
        if(todo.isEditable)  setTodoId(null);
        else   setTodoId(todo.id);
    }   

    return ( 
    <>  
        <div className={`inline-flex items-center min-w-fit max-w-fit ml-[8%] border border-black/10 rounded-lg px-[2%] 
                py-1.5 mb-4 gap-x-3 shadow-sm bg-[#266b57] duration-300 text-black 
                rounded-tl-4xl rounded-bl-2xl rounded-tr-2xl rounded-br-4xl
            ${complete ? "bg-[#bf5353]" : "bg-[#266b57]"}
        `}>
            <input
                type="checkbox"
                className="cursor-pointer h-4 w-6"
                checked={todo.completed}
                onChange={handleTaskCompleted}
            />
            <div style={{ width: `${todo.todoMsg.length} ch` }}     
                className={`
                    outline-none w-auto mr-4 bg-transparent rounded-lg text-white font-bold
                    ${ complete ? "line-through" : ""} 
                `}    
            >
                {todo.todoMsg}
            </div>

            <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 
                justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={handleToggleEdit}
                disabled={todo.completed}
            >
                {todo.isEditable ? "📁" : "✏️"}
            </button>
            
            
            <button 
                onClick={() => dispatch(removeTodo(todo.id))}
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center
                    items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            >
                ❌
            </button>
        </div>
    </>
  )
}

export default TodoListRedux;