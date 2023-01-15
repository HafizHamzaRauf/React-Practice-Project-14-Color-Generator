import classes from "./Form.module.css";
import Values from "values.js";
import { useRef, useState } from "react";
const Form = ({ onChange }) => {
  const colorInputRef = useRef();
  const [error, setError] = useState(false);
  const formHandler = (e) => {
    e.preventDefault();
    try {
      const color = new Values(colorInputRef.current.value).all();
      if (error) {
        setError(false);
      }

      onChange(color);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <form onSubmit={formHandler} className={classes.form}>
      <h1 className={classes.heading}>Color Generator</h1>
      <div className={classes["input-container"]}>
        <input
          ref={colorInputRef}
          className={`${classes.input} ${error && classes["border-color"]}`}
          type="text"
          placeholder="#f15025"
        />
        <button className={classes.btn} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
