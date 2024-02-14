import React, { useState } from "react";
import SearchWord from "../search-word/SearchWord";
import "./AddWord.css";

function AddWord() {
  const [dictionary, setDictionary] = useState([]);
  const [input, setInput] = useState("");

  function handleAddWord() {
    if (
      !dictionary.includes(input.trim().toLowerCase()) &&
      input.trim() !== ""
    ) {
      setDictionary([...dictionary, input.trim().toLowerCase()]);
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
      <SearchWord book={dictionary} />
    </div>
  );
}

export default AddWord;
