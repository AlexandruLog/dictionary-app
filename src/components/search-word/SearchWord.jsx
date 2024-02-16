import React, { useState } from "react";
import "./SearchWord.css";

function SearchWord({ book, checkExistance, toggleWord }) {
  const [input, setInput] = useState("");

  function handleSearchWord() {
    if (book.includes(input.trim().toLowerCase())) {
      checkExistance("Exista in dictionar ✔");
    } else {
      checkExistance("Nu exista in dictionar ✖");
    }
    setInput("");
  }

  return (
    <div className="search-word-component">
      <input
        placeholder="Search word"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={handleSearchWord}>Check</button>
      <p className="words-container" onClick={toggleWord}>
        Vezi cuvintele adaugate in dictionar
      </p>
    </div>
  );
}

export default SearchWord;
