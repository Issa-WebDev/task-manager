const initialValue = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};
const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "DELETE_TODO":
      return state.filter((t) => t.id !== action.payload);
    case "OVER_TODO":
      return state.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
    default:
      return state;
  }
};

export { todosReducer, initialValue };
