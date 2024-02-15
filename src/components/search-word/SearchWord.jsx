import React, { useState } from "react";
import "./SearchWord.css";

function SearchWord({ book, checkWordExistance }) {
  const [input, setInput] = useState("");

  function handleSearchWord() {
    if (book.includes(input.trim().toLowerCase())) {
      checkWordExistance("Exista in dictionar ✔");
    } else {
      checkWordExistance("Nu exista in dictionar ✖");
    }
    setInput("");
  }

  function checkWordExistance(message) {
    const existanceInfoPara =
      document.getElementsByClassName("existance-status")[0];
    existanceInfoPara.textContent = message;
    existanceInfoPara.classList.add("show-existance-status");
    setTimeout(() => {
      existanceInfoPara.classList.remove("show-existance-status");
    }, 1500);
  }

  function showDictionaryWords() {
    const words = document.getElementsByClassName("dictionary-words")[0];
    if (book.length !== 0) {
      words.textContent = book;
    } else {
      words.textContent = "Nu exista cuvinte in dictionar.";
    }

    if (!words.classList.contains("show-dictionary-words")) {
      words.classList.add("show-dictionary-words");
      setTimeout(() => {
        words.classList.remove("show-dictionary-words");
      }, 10000);
    }
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
      <button
        onClick={() => {
          handleSearchWord();
        }}
      >
        Check
      </button>
      <p className="words-container" onClick={showDictionaryWords}>
        Vezi cuvintele adaugate in dictionar
      </p>
    </div>
  );
}

export default SearchWord;
