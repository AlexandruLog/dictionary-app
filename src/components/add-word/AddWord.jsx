import React, { useState } from "react";
import "./AddWord.css";

function AddWord({ book, setBook, showMessage }) {
  const [input, setInput] = useState("");

  function handleAddWord() {
    if (!book.includes(input.trim().toLowerCase()) && input.trim() !== "") {
      setBook([...book, input.trim().toLowerCase()]);
      showMessage("Cuvant adaugat cu succes.");
    } else {
      showMessage("Cuvantul exista deja in dictionar.");
    }
    setInput("");
  }

  return (
    <div className="add-word-component">
      <input
        placeholder="Add word"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={handleAddWord}>Add</button>
    </div>
  );
}

export default AddWord;
