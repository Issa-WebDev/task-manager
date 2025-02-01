import React from "react";

const Form = ({addTodo, inputValue, setInputValue}) => {
  return (
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
  );
};

export default Form;
