import React, { useState } from 'react';

export default function TextForm1(props) {
  const [text, setText] = useState("");
  const [fWord, findWord] = useState("");
  const [rWord, replaceWord] = useState("");

  const handlefindChange = (event) => findWord(event.target.value);
  const handleReplaceChange = (event) => replaceWord(event.target.value);
  const handleReplaceClick = () => {
    let newText = text.replaceAll(fWord, rWord);
    setText(newText);
    props.showAlert("Word Replaced", "success");
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearText = () => {
    setText("");
    props.showAlert("Cleared Text", "success");
  };
  const handleOnChange = (event) => setText(event.target.value);

  return (
    <div className='container'>
      <h2>Find and Replace Functionality:</h2>
      <div className="mb-3">
        <label htmlFor="">Enter word to find:</label>
        <textarea className="form-control" value={fWord} onChange={handlefindChange} id="mybox" rows="1"></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="">Enter word to replace:</label>
        <textarea className="form-control" value={rWord} onChange={handleReplaceChange} id="mybox" rows="1"></textarea>
      </div>
      <button className="btn btn-primary m-3" onClick={handleReplaceClick}>Replace</button>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary m-3" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary m-3" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary m-3" onClick={handleClearText}>Clear Text</button>
      <h2>Your text summary:</h2>
      <p>{(text.split(" ").length) - 1} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes required to read the whole text</p>
      <h2>Preview:</h2>
      <p>{text.length > 0 ? text : "Enter something in the above textbox to preview"}</p>
    </div>
  );
}
