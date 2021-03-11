import React from "react";
import DivEmoji from "./DivEmoji";
import tab from "../../emojiList.json";

const Line = (props) => {
  const regex = new RegExp(props.input, "i");
  return (
    <div className="Line">
      {tab.map((emo, index) => {
        if (regex.test(emo.keywords)) {
          return <DivEmoji symbol={emo.symbol} title={emo.title}></DivEmoji>;
        } else {
          return "";
        }
      })}
    </div>
  );
};

export default Line;
