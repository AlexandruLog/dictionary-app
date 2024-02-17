import React, { useState } from "react";
import "./SearchWord.css";

function SearchWord({ book }) {
  const [input, setInput] = useState("");
  const [exists, setExists] = useState(false);
  const [showWords, setShowWords] = useState(false);
  const [searchWordInfo, setSearchWordInfo] = useState("");

  function handleSearchWord() {
    if (book.includes(input.trim().toLowerCase())) {
      checkExistence("Exista in dictionar ✔");
    } else {
      checkExistence("Nu exista in dictionar ✖");
    }
    setInput("");
  }

  function checkExistence(message) {
    setSearchWordInfo(message);
    setExists(true);
    setTimeout(() => {
      setExists(false);
    }, 1500);
  }

  function toggleWords() {
    setShowWords(true);
    setTimeout(() => {
      setShowWords(false);
    }, 5000);
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
      <p className="words-container" onClick={toggleWords}>
        Vezi cuvintele adaugate in dictionar
      </p>

      <div>
        <p
          className={`existence-status ${
            exists ? "show-existence-status" : ""
          }`}
        >
          {searchWordInfo}
        </p>
        <p
          className={`dictionary-words ${
            showWords ? "show-dictionary-words" : ""
          }`}
        >
          {book.length !== 0 ? book : "Nu exista cuvinte in dictionar"}
        </p>
      </div>
    </div>
  );
}

export default SearchWord;
