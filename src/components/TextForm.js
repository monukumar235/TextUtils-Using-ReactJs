import { React, useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCaseClick =() =>{
    let newtext = text.toLowerCase();
    setText(newtext);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = ()=>{
    let newtext = "";
    setText(newtext);
  }

  const handleCapitalizedClick =()=>{
    let words = text.split(" ");

    for(let i=0;i<words.length;i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    setText(words.join(" "));
  }

  const handleInvertCaseClick =()=>{
    let words = text.split(" ");

    for(let i=0;i<words.length;i++){
         words[i] = words[i].charAt(0).toLowerCase() + words[i].slice(1).toUpperCase();
    }
    setText(words.join(" "));
  }

  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
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

      <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCapitalizedClick}>
        Capitalized Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleInvertCaseClick}>
        Invert Case Text
      </button>

    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} word and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>

        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
