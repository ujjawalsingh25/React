import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id: nanoid(), 
        todoMsg: "First todo",
        completed: false,
        isEditable: false, 
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                todoMsg: action.payload,
                completed: false,
                isEditable: false,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todoIter => todoIter.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find(todoIter => todoIter.id === action.payload.id);
            if (todo) {
                todo.todoMsg = action.payload.todoMsg;
                todo.isEditable = false;
            }
        },
        toggleComplete: (state, action) => {
            const todo = state.todos.find(todoIter => todoIter.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        toggleEdit: (state, action) => {
            const todo = state.todos.find(todoIter => todoIter.id === action.payload);
            if (todo) {
                todo.isEditable = !todo.isEditable;
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo, toggleComplete, toggleEdit } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;