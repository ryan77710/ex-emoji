import React from "react";

const DivEmoji = (props) => {
  return (
    <div className="DivEmoji">
      <div>
        <span>{props.symbol}</span>
        <span>{props.title}</span>
      </div>
      <b>Click to copy !</b>
    </div>
  );
};
export default DivEmoji;
