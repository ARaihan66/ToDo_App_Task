"use client";
import React, { useState, useEffect } from "react";
import { MdEditDocument, MdDelete } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToDo, editToDo, removeToDo, clearToDo } from "../redux/features/todos/todoSlice";
import toast, { Toaster } from "react-hot-toast";

const Todo = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const [hydrated, setHydrated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const todoItems = useAppSelector((state) => state.todo.todo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setHydrated(true);
  }, []);

  const handleAddOrEditTodo = () => {
    if (inputTitle.trim() && inputDescription.trim()) {
      if (editId) {
        dispatch(editToDo({ id: editId, newTitle: inputTitle, newDescription: inputDescription }));
        toast.success("Task edited successfully");
        setEditId(null);
      } else {
        dispatch(addToDo({ inputTitle, inputDescription }));
        toast.success("New task added");
      }
    } else {
      toast.error("Please input both title and description");
    }
    setInputTitle("");
    setInputDescription("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(removeToDo(id));
    toast.success("Task deleted successfully");
  };

  const handleEditTodo = (item) => {
    setInputTitle(item.title);
    setInputDescription(item.description);
    setEditId(item.id);
  };

  const handleClearAll = () => {
    dispatch(clearToDo());
    toast.success("All Task cleared");
  };

  // Pagination logic
  const totalPages = Math.ceil(todoItems.length / itemsPerPage);
  const currentItems = todoItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  if (!hydrated) {
    return null;
  }

  return (
    <div className="w-[50%] m-auto p-[10px] my-[20px] bg-gray-100 rounded-xl shadow-xl">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-center text-2xl font-bold my-[20px]">ToDo List</h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          placeholder="Enter task title"
          className="outline-none border-none bg-white p-[10px] rounded-lg w-[500px]"
        />
        <textarea
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
          placeholder="Enter task description"
          className="outline-none border-none bg-white p-[10px] rounded-lg w-[500px] h-[100px]"
        />
        <button
          onClick={handleAddOrEditTodo}
          className="bg-orange-200 py-[10px] px-[30px] rounded-lg"
        >
          {editId ? "Edit Task" : "Add Task"}
        </button>
      </div>

      <div className="my-[50px] mx-[110px]">
        {currentItems.map((item) => (
          <div key={item.id} className="flex flex-col justify-between items-center my-[30px] p-[10px] bg-white rounded-xl shadow-xl">
            <h3 className="text-l font-bold">{item.title}</h3>
            <p className="text-justify my-[10px]">{item.description}</p>
            <div className="flex gap-8">
              <MdEditDocument onClick={() => handleEditTodo(item)} className="cursor-pointer text-2xl" />
              <MdDelete onClick={() => handleDeleteTodo(item.id)} className="cursor-pointer text-red-600 text-2xl" />
            </div>
          </div>
        ))}
      </div>
      
      {todoItems.length > 1 && (
        <>
          <div className="text-center my-[20px]">
            <button onClick={handleClearAll} className="bg-red-300 p-[10px] rounded-xl">
              Clear All Tasks
            </button>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-gray-300 p-[10px] rounded-xl"
            >
              Previous
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="bg-gray-300 p-[10px] rounded-xl"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;

