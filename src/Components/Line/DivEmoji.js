import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { toast } from "react-toastify";

const DivEmoji = (props) => {
  return (
    <CopyToClipboard text={props.symbol}>
      <div
        onClick={() => toast.warning(` emojie ${props.symbol} copied`)}
        className="DivEmoji"
      >
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
