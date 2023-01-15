import classes from "./ColorList.module.css";

import ColorItem from "./ColorItem";
const ColorList = ({ colors }) => {
  const content = colors.map((item, index) => {
    return (
      <ColorItem
        key={index}
        type={item.type}
        weight={item.weight}
        hex={item.hex}
      ></ColorItem>
    );
  });
  return <ul className={classes["color-container"]}>{content}</ul>;
};
export default ColorList;
