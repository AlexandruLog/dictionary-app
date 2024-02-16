import React, { useState } from "react";
import "./AddWord.css";

function AddWord({ book, setBook, toggleClass }) {
  const [input, setInput] = useState("");

  function handleAddWord() {
    if (!book.includes(input.trim().toLowerCase()) && input.trim() !== "") {
      if (book.length !== 0) {
        setBook([...book, ", ", input.trim().toLowerCase()]);
      } else {
        setBook([...book, input.trim().toLowerCase()]);
      }
      toggleClass("Cuvant adaugat cu succes.");
    } else if (input !== "") {
      toggleClass("Cuvantul exista deja in dictionar.");
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
