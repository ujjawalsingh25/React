import { useEffect, useState } from 'react'
import './App.css'
import {ToDoProvider} from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  // create a todo and take it in new Array with key(currentDate so unique for all) 
  // and add the created todo in that Array also add all prevTodos in the same Array
  const addTodo = todo => {
    setTodos((prevTodos) => [{id: Date.now(), ...todo},...prevTodos])
  }       

  const updateTodo = (id, todo)  => {
    setTodos((prev) => prev.map(
      (prevTodos) => (prevTodos.id === id) ? todo : prevTodos
    ))
    // Below is the same code as above
    // we iterate through the todos and if found same id to update then we update else remain the prevTodo as it is.
    // prev.map((eachVal) => {
    //   if(eachVal.id === id) todo; 
    // })
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }   // filters out the entire todo except the id to be deleted.

  //  Iterates the entire if found the id to update
  // takes all todo's props(or Object's children) as given  todos : [{id : 1, todo : "Todo Msg", completed : false,}]
  // overwrite the previous state of todos.complete as if true -> false && if false -> true.
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  // _____________ When application loads previous all todos will render from localStorage ________________________
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) setTodos(todos)
  },[])

  // the upper code will load all previous data but below code will
  // Saves all the todos to localStorage as todos added . **** SO, the dependencies is todos.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))   // "key" which is -> "todos" should be same as .getItem(upperCode)
  }, [todos])
// _______________________________________________________________________________________________________________

  return (
    <ToDoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>

     <h1 className='text-3xl text-white bg-gray-700 p-4'> Context API Local Storage</h1>
     <h1 className='text-3xl text-white bg-gray-700 p-4'> ToDo Project</h1>
     <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                            className="w-full" >
                              <TodoItem todo={todo}/>
                          </div>
                        ))}
            </div>
        </div>
       </div>

    </ToDoProvider>
  )
}

export default App
