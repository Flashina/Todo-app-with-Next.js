"use client";
import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (todo) => {
    setInputValue(todo.text);
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const updateTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === currentTodo.id ? { ...todos, text: inputValue } : todo
      )
    );
    setInputValue("");
    setIsEditing(false);
    setCurrentTodo(null);
  };


  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="shadow-4xl flex flex-col md:flex-row bg-rose-50 my-16 p-6 rounded-md">
          <div className="p-6 md:p-12">
            <h2 className="flex items-center justify-center text-l font-medium md:font-bold md:text-xl">
              My Todo-List Application
            </h2>

            <div className="flex flex-col mt-5 space-y-4 md:spacex-3 md:flex-row md:flex-col-0">
              <input
                type="
              "
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="p-2 px-4 md:w-96 bg-white border shadow-2xl rounded-md focus:outline-none"
                placeholder="Enter your todo here"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={isEditing ? updateTodo : addTodo}
                className="text-white px-5 py-3 text-l rounded-md bg-purple-300 hover:bg-purple-400 hover:text-white my-4 "
              >
                Add Todo
              </button>
            </div>
            <ul className="my-6">
              {todos.map((todo) => (
                <li key={todo.id}>
                  <div className="p-2 px-4 md:w-96 bg-white border shadow-2xl rounded-md focus:outline-none">
                    {todo.text}
                  </div>
                  <button
                    onClick={() => editTodo(todo)}
                    className="text-zinc-700 px-5 py-3 mx-1 text-l rounded-md bg-yellow-200 hover:bg-yellow-600 hover:text-white my-4 "
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-white px-5 py-3 mx-1 text-l rounded-md bg-rose-500 hover:bg-rose-700 hover:text-white my-4 "
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
