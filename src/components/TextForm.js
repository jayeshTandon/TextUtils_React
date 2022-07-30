import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    let textMode = `text-${props.mode==='dark'?'light':'dark'}` ;

    const handleUpperCase = () => {
        if(text.length > 0)
        {
            setText(text.toUpperCase());
            props.showAlert("Converted to UpperCase", "success");
        }
        else
        {
            props.showAlert("Empty input !!", "danger");
        }
    }
    const handleLowerCase = () => {
        if(text.length > 0)
        {
            setText(text.toLowerCase());
            props.showAlert("Converted to LowerCase", "success");
        }
        else
        {
            props.showAlert("Empty input !!", "danger");
        }
    }
    const handleClearText = () => {
        setText("");
    }
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard.")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container my-3">
                <h1 className={textMode}>{props.heading}</h1>
                <div className="form-group">
                    <textarea placeholder='Enter the text here...' className="form-control" style={{backgroundColor: props.mode==='dark'?'black':'white', color : props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} id="text-area" rows="10"></textarea>
                </div>

                <button className='btn btn-primary mx-1 my-1' onClick={handleUpperCase}>Convert to Upper Case.</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleLowerCase}>Convert to Lower Case.</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleClearText}>Clear Text</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleCopyToClipboard}>Copy to Clipboard</button>
            </div>

            <div className="container my-3">
                <h2 className={textMode}>Text Summary</h2>
                <p className={textMode}>
                    Words : {text.split(" ").length} <br />
                    Characters : {text.length}
                </p>
            </div>
        </>
    )
}
