import React, { useState } from "react";
import "./SearchWord.css";

function SearchWord({ book }) {
  const [input, setInput] = useState("");

  function handleSearchWord() {
    if (book.includes(input.trim().toLowerCase())) {
      alert(`✔ '${input}' a fost gasit in dictionar.`);
    } else {
      alert(`❌ '${input}' NU exista in dictionar.`);
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
      <p
        onClick={() => {
          book.length === 0
            ? alert("Nu exista cuvinte in dictionar.")
            : alert(`📚 ${book}`);
        }}
      >
        Vezi cuvintele adaugate in dictionar
      </p>
    </div>
  );
}

export default SearchWord;
