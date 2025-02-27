import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import AddTodoRedux from '../../components/AddTodoRedux'; 
import TodoListRedux from '../../components/TodoListRedux';

function ReduxToolkit() {
  const [todoId, setTodoId] = useState("");
  const todos = useSelector(state => state.todos);

  return (
    <> 
      <AddTodoRedux todoId={todoId} setTodoId={setTodoId} />

      {todos.map((todoIter) => (
        <div key={todoIter.id} className="w-full" >
          <TodoListRedux todo={todoIter} todoId={todoId} setTodoId={setTodoId}/>
        </div>
      ))}
        
    </>
  )
}

export default ReduxToolkit;
