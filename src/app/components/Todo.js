import React from 'react'
import { MdEditDocument, MdDelete} from "react-icons/md";
import { useAppSelector } from '../redux/hooks';

const Todo = () => {
    const todoItems = useAppSelector((state)=> console.log(state))
  return (
    <div className='w-[50%] m-auto p-[10px] my-[20px] bg-gray-100 rounded-xl shadow-xl'>
        <h1 className='text-center text-2xl font-bold my-[20px]'>ToDo List</h1>
        <div className='flex justify-center items-center gap-10'>
            <input type='text' placeholder='Enter Item' className='outline-none border-none bg-white p-[10px] rounded-lg w-[300px]'/>
            <button className='bg-orange-200 py-[10px] px-[30px] rounded-lg'>Add</button>
        </div>

        <div className='my-[50px] mx-[110px]'>
            <div className='flex justify-between items-center px-[20px] my-[10px]'>
                <h3 className='text-l'>Milk</h3>
                <div className='flex gap-8'>
                <MdEditDocument className='cursor-pointer text-2xl'/>
                <MdDelete className='cursor-pointer text-red-600 text-2xl'/>
                </div>
            </div>
            <div className='flex justify-between items-center px-[20px] my-[10px]'>
                <h3 className='text-l'>Water</h3>
                <div className='flex gap-8'>
                <MdEditDocument className='cursor-pointer text-2xl'/>
                <MdDelete className='cursor-pointer text-red-600 text-2xl'/>
                </div>
            </div>
            <div className='flex justify-between items-center px-[20px] my-[10px]'>
                <h3 className='text-l'>Rice</h3>
                <div className='flex gap-8'>
                <MdEditDocument className='cursor-pointer text-2xl'/>
                <MdDelete className='cursor-pointer text-red-600 text-2xl'/>
                </div>
            </div>
        </div>
        <div className='text-center my-[20px]'>
        <button className='bg-red-300 p-[10px] rounded-xl'>Clear All Items</button>
        </div>
    </div>
  )
}

export default Todo