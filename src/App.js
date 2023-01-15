import ColorList from "./components/ColorList";
import Form from "./components/Form";
import { useState } from "react";
import Values from "values.js";
const defaultColor = new Values("#f15025").all();
const App = (props) => {
  const [color, setColor] = useState(defaultColor);
  return (
    <>
      <Form onChange={setColor}></Form>
      <ColorList colors={color}></ColorList>
    </>
  );
};

export default App;
