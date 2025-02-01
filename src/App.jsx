import React, { useEffect, useReducer, useState } from "react";
import { todosReducer, initialValue } from "./todosReducer";
import Form from "./composants/Form";
import Item from "./composants/Item";

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
      <Form
        addTodo={addTodo}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <section className="w-[500px]">
        {todos.map(({ id, text, completed }) => (
          <Item
            id={id}
            key={id}
            text={text}
            completed={completed}
            deleteTodo={deleteTodo}
            overTask={overTask}
          />
        ))}
      </section>
    </section>
  );
};

export default App;
