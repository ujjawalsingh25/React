import React, { useState } from 'react'
import { useTodo } from '../contexts/local-storage';

function TodoItem({ todo }) {
    const [complete, setComplete] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const[todoMsg, setTodoMsg] = useState(todo.todo); 
    console.log(todoMsg);

    const {updateTodo, deleteTodo, toggleComplete} = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg});
        setIsEditable(false);
    }

    const taskCompleted = () => {
        setComplete(prev => !prev);
        toggleComplete(todo.id);
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
                onChange={taskCompleted}
            />
            <input
                type="text"
                className={`
                    outline-none w-auto mr-4 bg-transparent rounded-lg text-white font-bold
                    ${ complete ? "line-through" : ""} 
                    ${ isEditable ? "border px-4 min-w-xs" : "border-transparent"}
                `}
                style={{ width: `${todoMsg.length}ch` }}
                value={todoMsg}
                onChange={event => setTodoMsg(event.target.value)}
                readOnly={!isEditable}
            />

            <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 
                justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;
                    if (isEditable)  editTodo(); 
                    else setIsEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isEditable ? "📁" : "✏️"}
            </button>
            
            
            <button 
                onClick={() => deleteTodo(todo.id)}
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center
                    items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            >
                ❌
            </button>
        </div>
    </>
  )
}

export default TodoItem;