import React from "react";
import logo from "./logo.svg";
import ItemList from "./Components/ItemList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>To Do from app</h1>
      <ItemList />
    </div>
  );
}

export default App;
