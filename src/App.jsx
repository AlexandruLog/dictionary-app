import React, { useState } from "react";
import "./App.css";
import AddWord from "./components/add-word/AddWord";
import SearchWord from "./components/search-word/SearchWord";

function App() {
  const [dictionary, setDictionary] = useState([]);

  return (
    <div className="app">
      <div className="container">
        <AddWord book={dictionary} setBook={setDictionary} />
        <SearchWord book={dictionary} />
      </div>
    </div>
  );
}

export default App;
