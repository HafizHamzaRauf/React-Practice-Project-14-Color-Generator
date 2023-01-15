import { useState } from "react";
import classes from "./ColorItem.module.css";
import copy from "copy-to-clipboard";
const defaultCopyText = "Copied To Clipboard";

const ColorItem = ({ weight, hex, type }) => {
  const [copyText, setCopyText] = useState("");
  const copyHandler = (e) => {
    copy(e.target.id);
    setCopyText(defaultCopyText);
    setTimeout(() => {
      setCopyText("");
    }, 1000);
  };
  weight += "%";
  hex = "#" + hex;
  const fontColor = type === "tint" ? "black" : "white";
  return (
    <li
      id={hex}
      onClick={copyHandler}
      className={classes.color}
      style={{ backgroundColor: hex, color: fontColor }}
    >
      <p id={hex}>{weight}</p>
      <p id={hex}>{hex}</p>
      <p className={classes.copy}>{copyText}</p>
    </li>
  );
};
export default ColorItem;
