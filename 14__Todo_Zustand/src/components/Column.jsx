import React, { useMemo, useState } from 'react'
import Task from './Task'
import { useStore } from '../store/store'
import { shallow } from 'zustand/shallow'

export default function Column({ stage }) {
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);
    const [drop, setDrop] = useState(false);
    const [removeOpt, setRemoveOpt] = useState(false);
    
    // ------------------------------------------------------------------------------------------
    // const tasks = useStore((store) => 
    //     store.tasks.filter((task) => task.stage === stage)  
    // )       // Since we use filter it create new Array hence it need to "ReRender"
    // ------------------------------------------------------------------------------------------

    // const filtered = useMemo(() => {
    //     tasks.filter((task) => task.stage === stage)
    // }, [tasks, stage]);     // React method of Solution where we put in cache 
    // ------------------------------------------------------------------------------------------

    // const tasks = useStore( 
    //     (store) => store.tasks.filter((task) => task.stage === stage),
    //     (prev, next) => {
    //         const longestTask = prev.length > next.length ? prev.length : next.length;
    //         for(let i=0; i<longestTask; i++) {
    //             if(!prev[i] || !next[i])   return false;
    //             if(prev[i] !== next[i])   return false;
    //         }
    //         return true;
    //     }     // this custom compare function make sure it runs "only if any change occur" 
    // );
    // ------------------------------------------------------------------------------------------
    
    // const tasks = useStore((store) => 
        //     store.tasks.filter((task) => task.stage === stage),
    //     shallow  // -->> It works as compare if any change happen similar to above custom function
    // );
    // ---------------------------------------------------------------------------------------------------

    const allTasks = useStore((store) => store.tasks, shallow);
    const tasks = useMemo(() => {
        return allTasks.filter((task) => task.stage === stage);
    }, [allTasks, stage]);
    // console.log(`Rendering Column: ${stage}`, tasks);

    const addTask = useStore((store) => store.addTask);
    const setDraggedTask = useStore((store) => store.setDraggedTask);
    const draggedTask = useStore((store) => store.draggedTask);
    const moveTask = useStore((store) => store.moveTask);

    const handleAddingTodo = () => {
        addTask(text, stage);
        setText('');
        setOpen(false);
    }

  
    return (
        <div className={`bg-[#313131] text-white min-h-[20rem] w-1/4 max-w-[25rem] rounded-xl mx-[3%] p-2 my-4
            ${drop === true ? 'border-dashed border-2' : ''}`}
            onDragOver={event => {
                event.preventDefault();
                setDrop(true);
            }}
            onDragLeave={event => {
                event.preventDefault();
                setDrop(false);
            }}
            onDrop={event => {
                setDrop(false);
                moveTask(draggedTask, stage)
                setDraggedTask(null);
            }}
        >
            <div className='flex justify-between'>
                <p className='text-xl mx-4 font-bold text-center'>{stage}</p>
                <div>
                    <button 
                        onClick={() => {setOpen(prev => !prev)}}
                        className='mx-4 outline-none rounded-sm bg-[#2f72ed] text-white font-bold shadow-lg px-4 py-2 
                            transition-all duration-100 hover:bg-[#1d5cd0] hover:shadow-xl rounded-tl-4xl rounded-bl-2xl 
                            rounded-tr-2xl rounded-br-6xl'
                    > Add </button>
                    <button 
                        onClick={() => {setRemoveOpt(prev => !prev)}}
                        className='mx-4 outline-none rounded-sm bg-[#ed2f2f] text-white font-bold shadow-lg px-4 py-2 
                            transition-all duration-100 hover:bg-[#d01d1d] hover:shadow-xl rounded-tl-2xl rounded-bl-6xl 
                            rounded-tr-4xl rounded-br-2xl'
                    > Remove </button>
                </div>
            </div>

            { open && <div className='w-full text-lg'>
                <div className=''>
                    <input  
                        value={text}
                        onChange={event => setText(event.target.value)}
                        className='w-3/4 bg-white font-bold text-gray-700 m-2  px-8 py-2 rounded-2xl 
                            rounded-tl-4xl rounded-bl-2xl rounded-tr-2xl rounded-br-4xl' 
                        placeholder='Write your todos to add...'
                    />
                    <button onClick={handleAddingTodo}
                        className='outline-none bg-[#2c8858] text-white font-bold shadow-lg px-4 py-1 
                        transition-all duration-100 hover:bg-[#3b5e35] hover:shadow-xl rounded-2xl'
                    > + </button>
                </div>
            </div> }

            {tasks.map((task) => ( 
                <Task key={task.id} title={task.title} removeOpt={removeOpt} setRemoveOpt={setRemoveOpt} />
            ))}
                
        </div>
    )
};
