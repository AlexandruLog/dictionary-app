import React, { useState } from "react";
import "./App.css";
import AddWord from "./components/add-word/AddWord";
import SearchWord from "./components/search-word/SearchWord";

function App() {
  const [dictionary, setDictionary] = useState([]);

  function toggleAddedText(message) {
    const addedInfoPara = document.getElementsByClassName("added-status")[0];
    addedInfoPara.textContent = message;
    addedInfoPara.classList.add("show-added-status");
    setTimeout(() => {
      addedInfoPara.classList.remove("show-added-status");
    }, 1500);
  }

  return (
    <div className="app">
      <p className="added-status"></p>
      <div className="container">
        <AddWord
          book={dictionary}
          setBook={setDictionary}
          showMessage={toggleAddedText}
        />
        <SearchWord book={dictionary} />
      </div>
      <p className="existance-status"></p>
      <p className="dictionary-words"></p>
    </div>
  );
}

export default App;
