import { useState, useEffect } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const getDayName = (date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  };

  return (
    <>
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-base font-bold">
          {currentDateTime.toLocaleDateString()}
        </h1>
        <h1 className="text-base font-bold">{getDayName(currentDateTime)}</h1>
        <h1 className="text-base font-bold">
          {currentDateTime.toLocaleTimeString()}
        </h1>
      </div>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
