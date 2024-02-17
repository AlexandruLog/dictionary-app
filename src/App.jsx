import React, { useState } from "react";
import "./App.css";
import AddWord from "./components/add-word/AddWord";
import SearchWord from "./components/search-word/SearchWord";

function App() {
  const [dictionary, setDictionary] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [exists, setExists] = useState(false);
  const [showWords, setShowWords] = useState(false);
  const [addedContent, setAddedContent] = useState("");
  const [searchWordInfo, setSearchWordInfo] = useState("");

  function toggleClass(message) {
    setAddedContent(message);
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 1500);
  }

  function checkExistence(message) {
    setSearchWordInfo(message);
    setExists(true);
    setTimeout(() => {
      setExists(false);
    }, 1500);
  }

  function toggleWord() {
    setShowWords(true);
    setTimeout(() => {
      setShowWords(false);
    }, 5000);
  }

  return (
    <div className="app">
      <p className={`added-status ${isActive ? "show-added-status" : ""}`}>
        {addedContent}
      </p>
      <div className="container">
        <AddWord
          book={dictionary}
          setBook={setDictionary}
          toggleClass={toggleClass}
        />
        <SearchWord
          book={dictionary}
          checkExistence={checkExistence}
          toggleWord={toggleWord}
        />
      </div>
      <p
        className={`existence-status ${exists ? "show-existence-status" : ""}`}
      >
        {searchWordInfo}
      </p>
      <p
        className={`dictionary-words ${
          showWords ? "show-dictionary-words" : ""
        }`}
      >
        {dictionary.length !== 0
          ? dictionary
          : "Nu exista cuvinte in dictionar"}
      </p>
    </div>
  );
}

export default App;
