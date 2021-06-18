import React from "react";
import "./App.css";
import Search from "./Components/Search/Search";
import Line from "./Components/Line/Line";
import Footer from "./Components/Footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Search input={input} setInput={setInput}></Search>
      <Line input={input}></Line>
      <Footer></Footer>
    </div>
  );
}

export default App;
