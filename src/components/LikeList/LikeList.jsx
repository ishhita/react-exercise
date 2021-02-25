import React, { useState } from "react";
import Header from "../Header/Header";
import "./likelist.css";
import { v4 } from "uuid";

const Likelist = () => {
  const [todo, setTodo] = useState([
    {
      id: v4(),
      task: "Counter",
      like: "",
    },
    {
      id: v4(),
      task: "Twitter Charcter Counter",
      like: "",
    },
    {
      id: v4(),
      task: "Password Matching",
      like: "",
    },
    {
      id: v4(),
      task: "Disable Button",
      like: "",
    },
    {
      id: v4(),
      task: "Age Checking",
      like: "",
    },
    {
      id: v4(),
      task: "Alphanumeric Password Checking",
      like: "",
    },
    {
      id: v4(),
      task: "Show Password",
      like: "",
    },
    {
      id: v4(),
      task: "Toast",
      like: "",
    },
    {
      id: v4(),
      task: "Add To Cart",
      like: "",
    },
    {
      id: v4(),
      task: "Switch Tabs",
      like: "",
    },
    {
      id: v4(),
      task: "Todos",
      like: "",
    },
    {
      id: v4(),
      task: "Design Tool Figma",
      like: "",
    },
    {
      id: v4(),
      task: "Dark Mode",
      like: "",
    },
    {
      id: v4(),
      task: "Like",
      like: "",
    },
  ]);

  const clickHandler = (id, like) => {
    setTodo((prevState) => {
      return [
        ...prevState.map((obj) => {
          if (obj.id === id) {
            obj.like = like === "" ? "👍" : "";
          }
          return obj;
        }),
      ];
    });
  };

  return (
    <div className="likelist row">
      <Header text="Like in a list" />

      {todo.map((item, i) => {
        return (
          <ul>
            <li>
              {item.task}{" "}
              <button
                onClick={() => {
                  clickHandler(item.id, item.like);
                }}
              >
                {item.like}Like
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Likelist;
