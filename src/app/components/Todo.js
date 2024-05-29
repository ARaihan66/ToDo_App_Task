import React from 'react'
import image from "../../../public/pic.jpg";

const Todo = () => {
  return (
    <div className=''>
        {/*<img src={image} alt="image" />*/}
        <h1 className='text-center text-2xl font-bold my-[20px]'>ToDo List</h1>
        <div className='flex justify-center items-center gap-10'>
            <input type='text' placeholder='Enter Item' className='outline-none border-none bg-gray-100 p-[10px] rounded-lg w-[300px]'/>
            <button className='bg-orange-200 py-[10px] px-[30px] rounded-lg'>Add</button>
        </div>

        <div>
            <div>
                <h3>Milk</h3>
                
            </div>
        </div>
    </div>
  )
}

export default Todo