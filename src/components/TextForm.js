import { React, useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange = {handleOnChange}
        ></textarea>

      </div>

      <button className="btn btn-primary" onClick={handleUpperCaseClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
