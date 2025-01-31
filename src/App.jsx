import React, { useEffect, useReducer, useState } from "react";
import { motion } from "framer-motion";
import { RiDeleteBin6Line } from "react-icons/ri";
import { todosReducer, initialValue } from "./todosReducer";

const App = () => {
  const [todos, dispatch] = useReducer(todosReducer, [], initialValue);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    dispatch({ type: "ADD_TODO", payload: inputValue });
    setInputValue("");
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const overTask = (id) => {
    dispatch({ type: "OVER_TODO", payload: id });
  };
  return (
    <section className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-2xl font-bold mb-4 border-b-2 border-b-blue-400">
        TASK MANAGMENT
      </h1>
      <form onSubmit={addTodo} className="w-[400px] flex gap-3">
        <input
          type="text"
          placeholder="Enter new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="px-2 flex-1 py-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-400 rounded-md font-semibold cursor-pointer hover:opacity-80"
        >
          Add Task
        </button>
      </form>
      <section className="w-[500px]">
        {todos.map(({ id, text, completed }) => (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={id}
            className="w-full flex flex-col"
          >
            <li className="flex bg-gray-700 px-2 py-1.5 items-center rounded-md mb-3">
              <span
                className={`flex-1 pl-1 text-wrap ${
                  completed ? "text-gray-400 line-through italic" : "text-white"
                }`}
              >
                {text}
              </span>
              <button
                onClick={() => overTask(id)}
                className={`bg-amber-600 py-1 px-3 rounded-md cursor-pointer hover:opacity-80 ${
                  completed ? "opacity-50" : "opacity-100"
                }`}
              >
                {completed ? "Cancel" : "Finished"}
              </button>
              <button
                onClick={() => deleteTodo(id)}
                className={`bg-red-700 p-2 rounded-md ml-2 cursor-pointer hover:opacity-80 ${
                  completed ? "opacity-50" : "opacity-100"
                } `}
              >
                <RiDeleteBin6Line />
              </button>
            </li>
          </motion.ul>
        ))}
      </section>
    </section>
  );
};

export default App;
