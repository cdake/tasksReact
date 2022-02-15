import React, { useState } from "react";

function Input({ addToList }) {
  const [input, setInput] = useState("");

  const addAndClean = () => {
    let toDo = {
      id: Date.now(),
      text: input,
      status: false
    };
    addToList(toDo);
    setInput("");
  };

  return (
    <div>
      <p>Hello there</p>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter your task here"
        value={input}
      />
      <button onClick={addAndClean}>Add Item</button>
    </div>
  );
}

export default Input;
