import { React, useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [mybtnText, setBtnText] = useState("Enable Dark Mode");

  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCaseClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
  };

  const handleCapitalizedClick = () => {
    let words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    setText(words.join(" "));
  };

  const handleInvertCaseClick = () => {
    let words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].charAt(0).toLowerCase() + words[i].slice(1).toUpperCase();
    }
    setText(words.join(" "));
  };

  const copyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Text copied to clipboard");
    handleClearClick();
  };

  const reomveExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
  };

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              id="myBox"
              rows="8"
              onChange={handleOnChange}
            ></textarea>
          </div>

          <button
            className="btn btn-primary mx-1"
            onClick={handleUpperCaseClick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={handleLowerCaseClick}
          >
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>
            Clear Text
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={handleCapitalizedClick}
          >
            Capitalized Text
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={handleInvertCaseClick}
          >
            Invert Case Text
          </button>
          <button className="btn btn-primary mx-1" onClick={copyText}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-1" onClick={reomveExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>
            {text.split(" ").length} word and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} minutes to read</p>

          <h2>Preview</h2>
          <p>{text}</p>
        </div>
        <div className="container my-10">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onClick={toggleStyle}
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              {mybtnText}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
