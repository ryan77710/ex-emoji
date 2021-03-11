import React from "react";

const Search = (props) => {
  const handleInputChange = (even) => {
    const value = even.target.value;
    props.setInput(value);
  };
  return (
    <header>
      <h1>😎 Emoji Search 😎</h1>
      <input
        placeholder="what emoji are you looking for ?"
        type="text"
        value={props.input}
        onChange={handleInputChange}
      />
    </header>
  );
};

export default Search;
