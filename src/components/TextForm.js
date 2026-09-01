import { React, useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const handleLowerCaseClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Cleared!", "success");
  };

  const handleCapitalizedClick = () => {
    let words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    setText(words.join(" "));
    props.showAlert("Converted to Capitalized Case!", "success");
  };

  const handleInvertCaseClick = () => {
    let words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].charAt(0).toLowerCase() + words[i].slice(1).toUpperCase();
    }
    setText(words.join(" "));
    props.showAlert("Converted to Inverse Capitalized Case!", "success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    handleClearClick();
    props.showAlert("Text has been copied to clipboard!", "success");
  };

  const reomveExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed the extra space from the text!", "success");
  };

  const countWords = () => {
    let wordArr = text.split(/\s/);
    let count = 0;
    for (let i = 0; i < wordArr.length; i++) {
      if (wordArr[i] !== "") {
        count++;
      }
    }
    return count;
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#343a40" }}
      >
        <div className="container">
          <h2 className="mb-4">{props.heading}</h2>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              id="myBox"
              rows="8"
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "#343a40" : "white",
                color: props.mode === "dark" ? "white" : "grey",
              }}
            ></textarea>
          </div>

          <button
            disabled={text.length === 0}
            className="btn mx-1 my-1"
            onClick={handleUpperCaseClick}
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "#343a40",
              color: props.mode === "dark" ? "black" : "white",
            }}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn mx-1 my-1"
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "#343a40",
              color: props.mode === "dark" ? "black" : "white",
            }}
            onClick={handleLowerCaseClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn mx-1 my-1"
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "#343a40",
              color: props.mode === "dark" ? "black" : "white",
            }}
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn mx-1 my-1"
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "#343a40",
              color: props.mode === "dark" ? "black" : "white",
            }}
            onClick={handleCapitalizedClick}
          >
            Capitalized Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn mx-1 my-1"
            onClick={handleInvertCaseClick}
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "#343a40",
              color: props.mode === "dark" ? "black" : "white",
            }}
          >
            Invert Case Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn mx-1 my-1"
            onClick={copyText}
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "#343a40",
              color: props.mode === "dark" ? "black" : "white",
            }}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn  mx-1 my-1"
            onClick={reomveExtraSpaces}
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "#343a40",
              color: props.mode === "dark" ? "black" : "white",
            }}
          >
            Remove Extra Spaces
          </button>
        </div>
        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>
            {countWords()} word and {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes to read
          </p>

          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Nothing to preview!"}
          </p>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
