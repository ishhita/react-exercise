import React, { useState } from "react";
import Header from "../Header/Header";
import "./todos.css";

import { v4 } from "uuid";
const Todos = () => {
  const [todo, setTodo] = useState([
    {
      id: v4(),
      task: "Counter",
      completed: "line-through",
    },
    {
      id: v4(),
      task: "Twitter Charcter Counter",
      completed: "line-through",
    },
    {
      id: v4(),
      task: "Password Matching",
      completed: "line-through",
    },
    {
      id: v4(),
      task: "Disable Button",
      completed: "line-through",
    },
    {
      id: v4(),
      task: "Age Checking",
      completed: "line-through",
    },
    {
      id: v4(),
      task: "Alphanumeric Password Checking",
      completed: "line-through",
    },
    {
      id: v4(),
      task: "Show Password",
      completed: "line-through",
    },
    {
      id: v4(),
      task: "Toast",
      completed: "line-through",
    },
    {
      id: v4(),
      task: "Add To Cart",
      completed: "line-through",
    },
    {
      id: v4(),
      task: "Switch Tabs",
      completed: "line-through",
    },
    {
      id: v4(),
      task: "Todos",
      completed: "line-through",
    },
    {
      id: v4(),
      task: "Design Tool Figma",
      completed: "",
    },
    {
      id: v4(),
      task: "Dark Mode",
      completed: "line-through",
    },
    {
      id: v4(),
      task: "Like",
      completed: "",
    },
  ]);

  const [newTask, setNewTask] = useState("");
  const [countTaskDone, setCountTaskDone] = useState(0);

  const todoAdd = (newTask) => {
    setTodo([...todo, { id: v4(), task: newTask, completed: "" }]);
  };

  const todoDone = (id, completed) => {
    setTodo((prevState) => {
      return [
        ...prevState.map((obj) => {
          if (obj.id === id) {
            obj.completed = completed === "" ? "line-through" : "";
          }
          return obj;
        }),
      ];
    });
  };

  const todoDelete = (id) => {
    const newTodoList = todo.filter((obj) => obj.id != id);
    return setTodo(newTodoList);
  };

  const todoRemaining = () => {
    setCountTaskDone((countTaskDone) => {
      countTaskDone = 2;
    });
  };

  return (
    <div className="todos">
      <Header text="Todo List" />
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        onClick={() => {
          todoAdd(newTask);
        }}
      >
        Add
      </button>
      <br />
      <br />
      <p>
        <span>Total Task:{todo.length}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>Remaining Task:{countTaskDone}</span>
      </p>
      <table>
        <thead>
          <tr>
            <th>NO</th>
            <th>TASK</th>
            <th>DONE</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((obj, i) => {
            return (
              <tr key={obj.id}>
                <td>{++i}</td>
                <td
                  style={{ textDecoration: obj.completed, cursor: "pointer" }}
                  onClick={() => {
                    todoDone(obj.id, obj.completed);
                  }}
                >
                  {obj.task}
                </td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => {
                      todoDone(obj.id, obj.completed);
                      todoRemaining();
                    }}
                    checked={obj.completed}
                  />
                </td>
                <td>
                  <button onClick={() => todoDelete(obj.id)}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
