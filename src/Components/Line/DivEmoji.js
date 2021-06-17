import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const DivEmoji = (props) => {
  return (
    <CopyToClipboard text={props.symbol}>
      <div onClick={() => {}} className="DivEmoji">
        <div>
          <span>{props.symbol}</span>
          <span>{props.title}</span>
        </div>

        <b>Click to copy !</b>
      </div>
    </CopyToClipboard>
  );
};
export default DivEmoji;
