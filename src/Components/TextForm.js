import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const [fWord, findWord] = useState("");
const [rWord, replaceWord] = useState("");

const handlefindChange = (event) => {
    findWord(event.target.value);
  };
  const handleReplaceChange = (event) => {
  console.log(replaceWord(event.target.value)) ;
  };
  const handleReplaceClick = () => {
    let newText = text.replaceAll(fWord,rWord);
    setText(newText)
    props.showAlert("Word Replaced","success");
  };
    const handleUpClick=() => {
         console.log("Uppercase was clicked"+ text );
         let newText=text.toUpperCase();
         setText(newText)
         props.showAlert("Converted to Uppercase","success");
    }

    const handleLowClick=() => {
        console.log("Lowercase was clicked"+ text );
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
   }
   const handleClearText=()=>
   {
      let newtext="";
      setText(newtext);
      props.showAlert("Cleared Text","success");
   }
    const handleOnChange=(event) => {
        console.log("On change was clicked" );
        setText(event.target.value);
    }
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Find and Replace Functionality:</h2>
          <div className="mb-3">
            <label htmlFor="">Enter word to find :<textarea className="form-control" value={fWord} onChange={handlefindChange} id="mybox" rows="1"></textarea></label>
            </div>
    <div className="mb-3">
      <label htmlFor="">Enter word to replace:<textarea className="form-control" value={rWord} onChange=   {handleReplaceChange} id="mybox" rows="1"></textarea></label>
        </div>
    <button className="btn btn-primary m-3" onClick={handleReplaceClick}>Replace</button>
        </div>
      
    <div className="container" >
      <h2 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h2>
        <div className="mb-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
          <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? 'rgb(8 45 83)' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
    
      <button className="btn btn-primary m-3" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary m-3" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary m-3" onClick={handleClearText}>Clear Text</button>
    </div>

<div className="container"  style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h2 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Your text summary :</h2>
    <p >{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes required to read the whole text</p>
    <h2>Preview :</h2>
    <p>{text.length>0? text: "Enter something in the above textbox to preview"}</p>
</div>

    </>
  )
}
