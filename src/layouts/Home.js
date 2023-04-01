import React from "react";
import AddToDo from "../components/home/AddToDo";
import ToDoList from "./home/ToDoList";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <AddToDo />
        <hr />
        <ToDoList />
      </div>
    </div>
  );
}
