import React from "react";

export default function SingleToDo() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "2px solid teal",
          padding: "10px",
        }}
      >
        <input type="checkbox" />
        <p>Message</p>
        <button>Delete</button>
      </div>
    </div>
  );
}
