"use client";
import React, { useState, useEffect } from "react";
import { MdEditDocument, MdDelete } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToDo, editToDo, removeToDo,clearToDo } from "../redux/features/todos/todoSlice";
import toast, { Toaster } from "react-hot-toast";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [hydrated, setHydrated] = useState(false); 
  const todoItems = useAppSelector((state) => state.todo.todo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setHydrated(true);
  }, []);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      if (editId) {
        dispatch(editToDo({ id: editId, newText: inputValue }));
        toast.success("Item edited successfully");
        setEditId(null); // Clear the edit state
      } else {
        dispatch(addToDo(inputValue));
        toast.success("New item added");
      }
    } else {
      toast.error("Please input something");
    }
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(removeToDo(id)); 
    toast.success("Item deleted successfully");
  };

  const handleEditTodo = (item) => {
    setInputValue(item.text);
    setEditId(item.id);
  };

  const handleClearTodo = ()=>{
  dispatch( clearToDo());
  }

  if (!hydrated) {
    return null; 
  }

  return (
    <div className="w-[50%] m-auto p-[10px] my-[20px] bg-gray-100 rounded-xl shadow-xl">
      <Toaster position="top-center" reverseOrder={false} />
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
          {editId ? "Edit" : "Add"}
        </button>
      </div>

      <div className="my-[50px] mx-[110px]">
        {todoItems &&
          todoItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center px-[20px] my-[10px]">
              <h3 className="text-l">{item.text}</h3>
              <div className="flex gap-8">
                <MdEditDocument onClick={() => handleEditTodo(item)} className="cursor-pointer text-2xl" />
                <MdDelete onClick={() => handleDeleteTodo(item.id)} className="cursor-pointer text-red-600 text-2xl" />
              </div>
            </div>
          ))}
      </div>
      <div className="text-center my-[20px]">
        <button onClick={handleClearTodo} className="bg-red-300 p-[10px] rounded-xl">
          Clear All Items
        </button>
      </div>
    </div>
  );
};

export default Todo;
