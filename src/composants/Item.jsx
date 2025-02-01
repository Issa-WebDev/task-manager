import { motion } from "framer-motion";
import { RiDeleteBin6Line } from "react-icons/ri";

const Item = ({ id, text, completed, deleteTodo, overTask }) => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
  );
};

export default Item;
