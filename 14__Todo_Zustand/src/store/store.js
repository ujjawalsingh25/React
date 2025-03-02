import { create } from 'zustand';

const store = (set) => ({
    tasks: [{ id: Date.now(), title: "First Todo", stage: 'Planned' }],
    addTask: (title, stage) => 
        set((store) => ({ tasks: [...store.tasks, {id: Date.now(), title, stage}] })),
    removeTask: (id) => 
        set((store) => ({ tasks: store.tasks.filter((task) => task.id !== id)})),

    draggedTask: null,
    setDraggedTask: (title) => set({ draggedTask: title }),

    moveTask: (title, stage) =>
        set((store) => ({ tasks: store.tasks.map((task) => task.title === title ? { id:Date.now(), title, stage } : task),
    })),
});

export const useStore = create(store); 