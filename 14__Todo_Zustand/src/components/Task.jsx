import React, { useMemo } from 'react'
import { useStore } from '../store/store';
import { shallow } from 'zustand/shallow';

export default function Task({ title, removeOpt, setRemoveOpt }) {
  
  const task = useStore((store) => 
    store.tasks.find((task) => task.title === title), 
    shallow
  );

  const removeTask = useStore(store => store.removeTask);
  const setDraggedTask = useStore(store => store.setDraggedTask);

  return (
    <div 
      className='flex flex-row justify-between items-center cursor-move' 
      draggable 
      onDragStart={() => setDraggedTask(task.title)}
    >
      <div className={`bg-[#dddddd] min-h-[3rem] flex flex-col justify-between my-4 mx-2 px-6 py-2.5 text-black 
        rounded-tl-4xl    rounded-bl-2xl rounded-tr-2xl rounded-br-4xl
        ${removeOpt ? "w-4/5" : "w-full"}` 
      }>
          <div>{task.title}</div>
          <div className='flex justify-between'>
              <div></div>
              <div className={`text-white overflow-visible shadow-2xl text-xs rounded-2xl py-1 px-2 uppercase
                  ${task.stage === 'Planned' ? "bg-[#266b57]" : task.stage === 'Done' ? "bg-[#bf5353]" : "bg-[#de9d23]"}
              `}>
                  {task.stage}
              </div>
          </div>
      </div>

      { removeOpt && <div className='text-lg'>
        <button onClick={() => removeTask(task.id)}
          className='outline-none bg-[#ed2f2f] text-white font-bold shadow-lg px-4 py-1 
          transition-all duration-100 hover:bg-[#d01d1d] hover:shadow-xl rounded-2xl'
        > X </button>
      </div> }
    </div>
  )
};