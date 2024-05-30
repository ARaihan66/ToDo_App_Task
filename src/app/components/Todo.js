import React, { useState } from "react";
import { MdEditDocument, MdDelete } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToDo } from "../redux/features/todos/todoSlice";
import toast, { Toaster } from "react-hot-toast";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const todoItems = useAppSelector((state) => state.todo.todo);
  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addToDo(inputValue));
    }
   if(inputValue === ""){
    return  toast.success('Please input something')
   }
   toast.success('New item added')
    setInputValue("");
  };

  return (
    <div className="w-[50%] m-auto p-[10px] my-[20px] bg-gray-100 rounded-xl shadow-xl">
      <h1 className="text-center text-2xl font-bold my-[20px]">ToDo List</h1>
      <div className="flex justify-center items-center gap-10">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Item"
          className="outline-none border-none bg-white p-[10px] rounded-lg w-[300px]"
        />
        <button
          onClick={handleAddTodo}
          className="bg-orange-200 py-[10px] px-[30px] rounded-lg"
        >
          Add
        </button>
      </div>

      <div className="my-[50px] mx-[110px]">
        {todoItems &&
          todoItems.map((item, index) => {
            return (
              <div className="flex justify-between items-center px-[20px] my-[10px]">
                <h3 className="text-l">{item.text}</h3>
                <div className="flex gap-8">
                  <MdEditDocument className="cursor-pointer text-2xl" />
                  <MdDelete className="cursor-pointer text-red-600 text-2xl" />
                </div>
              </div>
            );
          })}
      </div>
      <div className="text-center my-[20px]">
        <button className="bg-red-300 p-[10px] rounded-xl">
          Clear All Items
        </button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Todo;
