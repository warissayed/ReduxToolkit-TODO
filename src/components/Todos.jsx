import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { FcCheckmark } from "react-icons/fc";
import { FcEmptyTrash } from "react-icons/fc";
import { HiMiniPencilSquare } from "react-icons/hi2";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1 className="text-lg font-bold">Todo's</h1>
      </div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div className=" flex justify-center items-center">
              {" "}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-white border-0 py-1 px-4 md:px-3 sm:px-0  focus:outline-none hover:bg-green-400 rounded text-md mx-1"
              >
                <FcCheckmark size={"25px"} />
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-white  border-0 py-1 px-4 md:px-3 sm:px-0 focus:outline-none hover:bg-yellow-400 rounded text-md mx-1"
              >
                <HiMiniPencilSquare size={"25px"} style={{ color: "black" }} />
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-white border-0 py-1 px-4 md:px-3 sm:px-0 focus:outline-none hover:bg-red-500 rounded text-md mx-1"
              >
                <FcEmptyTrash size={"25px"} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
