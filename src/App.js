import React from "react";
import "./App.css";
import Search from "./Components/Search/Search";
import Line from "./Components/Line/Line";
import Footer from "./Components/Footer/Footer";

import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <Search input={input} setInput={setInput}></Search>
      <Line input={input}></Line>
      <Footer></Footer>
    </div>
  );
}

export default App;
