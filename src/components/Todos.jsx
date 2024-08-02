import { useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  toggleComplete,
} from "../features/todo/todoSlice";
import { FcCheckmark, FcEmptyTrash, FcFolder } from "react-icons/fc";
import { HiMiniPencilSquare } from "react-icons/hi2";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const updateTodoHandler = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      setEditId(id);
      setEditText(todo.text);
    }
  };

  const saveEditHandler = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setEditId(null);
    setEditText("");
  };

  const toggleCompleted = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <>
      <div>
        <h1 className="text-lg font-bold">Todos</h1>
      </div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className={`mt-4 flex justify-between items-center px-4 py-2 rounded ${
              todo.completed ? "bg-green-600" : "bg-zinc-800"
            }`}
            key={todo.id}
          >
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className={`text-white bg-gray-400 border-0 py-1 px-4 md:px-3 sm:px-0 focus:outline-none rounded text-md mx-1 w-[75%] ${
                    todo.completed ? "line-through" : ""
                  }`}
                />
                <div>
                  <button
                    onClick={() => toggleCompleted(todo.id)}
                    className="text-white bg-white border-0 py-1 px-4 md:px-3 sm:px-0 focus:outline-none hover:bg-green-400 rounded text-md mx-1"
                  >
                    <FcCheckmark size={"25px"} />
                  </button>
                  <button
                    onClick={() => saveEditHandler(todo.id)}
                    className="text-white bg-white border-0 py-1 px-4 md:px-3 sm:px-0 focus:outline-none hover:bg-green-700 rounded text-md mx-1"
                  >
                    <FcFolder size={"25px"} />
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-white border-0 py-1 px-4 md:px-3 sm:px-0 focus:outline-none hover:bg-red-500 rounded text-md mx-1"
                  >
                    <FcEmptyTrash size={"25px"} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`text-white ${
                    todo.completed ? "line-through" : ""
                  }`}
                >
                  {todo.text}
                </div>
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => toggleCompleted(todo.id)}
                    className="text-white bg-white border-0 py-1 px-4 md:px-3 sm:px-0 focus:outline-none hover:bg-green-400 rounded text-md mx-1"
                  >
                    <FcCheckmark size={"25px"} />
                  </button>
                  <button
                    onClick={() => updateTodoHandler(todo.id)}
                    className="text-white bg-white border-0 py-1 px-4 md:px-3 sm:px-0 focus:outline-none hover:bg-yellow-400 rounded text-md mx-1"
                  >
                    <HiMiniPencilSquare
                      size={"25px"}
                      style={{ color: "black" }}
                    />
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-white border-0 py-1 px-4 md:px-3 sm:px-0 focus:outline-none hover:bg-red-500 rounded text-md mx-1"
                  >
                    <FcEmptyTrash size={"25px"} />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
