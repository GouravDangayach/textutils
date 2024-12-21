import React, {useState} from 'react';


export default function TextForm(props) {

    const [text, setText] = useState('Enter text here');
    const handleClickUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleClickLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearText = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    }

    const handleCapitalizedCase = () => {
        let newText = text.toLowerCase();
        let newTextArr = newText.split(" ");
        for (let i = 0; i < newTextArr.length; i++) {
            newTextArr[i] = newTextArr[i].charAt(0).toUpperCase() + newTextArr[i].slice(1);
        }
        setText(newTextArr.join(" "));
        props.showAlert("Converted to Capitalized Case", "success");
    }

    const handleSentenceCase = () => {
        let newText = text.toLowerCase();
        let newTextArr = newText.split(". ");
        for (let i = 0; i < newTextArr.length; i++) {
            newTextArr[i] = newTextArr[i].charAt(0).toUpperCase() + newTextArr[i].slice(1);
        }
        setText(newTextArr.join(". "));
        props.showAlert("Converted to Sentence Case", "success");
    }

    const handleAlternatingCase = () => {
        let newText = text.toLowerCase();
        let newTextArr = newText.split("");
        for (let i = 0; i < newTextArr.length; i++) {
            if (i % 2 === 0) {
                newTextArr[i] = newTextArr[i].toUpperCase();
            }
        }
        setText(newTextArr.join(""));
        props.showAlert("Converted to Alternating Case", "success");
    }

    const handleTitleCase = () => {
        let newText = text.toLowerCase();
        let newTextArr = newText.split(" ");
        for (let i = 0; i < newTextArr.length; i++) {
            newTextArr[i] = newTextArr[i].charAt(0).toUpperCase() + newTextArr[i].slice(1);
        }
        setText(newTextArr.join(" "));
        props.showAlert("Converted to Title Case", "success");
    }

    const handleInverseCase = () => {
        let newText = text.toLowerCase();
        let newTextArr = newText.split("");
        for (let i = 0; i < newTextArr.length; i++) {
            if (newTextArr[i] === newTextArr[i].toUpperCase()) {
                newTextArr[i] = newTextArr[i].toLowerCase();
            } else {
                newTextArr[i] = newTextArr[i].toUpperCase();
            }
        }
        setText(newTextArr.join(""));
        props.showAlert("Converted to Inverse Case", "success");
    }

    const handleReverseTextCase = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text Reversed", "success");
    }

    const handleDownloadText = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "text.txt";
        document.body.appendChild(element);
        element.click();
        props.showAlert("Text Downloaded", "success");
    }

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard", "success");
    }

    const handleRemoveExtraSpace = () => {
        let newText = text.split(" ").filter(Boolean).join(" ");
        setText(newText);
        props.showAlert("Extra Space Removed", "success");
    }

    const handleEmailExtractor = () => {
        let newText = text.replace(/[\r\n]+/gm, " ")
        newText = text.split(" ");
        let emailArr = [];
        for (let i = 0; i < newText.length; i++) {
            if (newText[i].includes("@")) {
                emailArr.push(newText[i]);
            }
        }
        setText(emailArr.join(" "));
        props.showAlert("Email Extracted", "success");
    }

    const handleMobileNoExtractor = () => {
        let newText = text.replace(/[\r\n]+/gm, " ")
        newText = newText.split(" ");
        let mobileNoArr = [];
        for (let i = 0; i < newText.length; i++) {
            if (newText[i].length === 10 && !isNaN(newText[i])) {
                mobileNoArr.push(newText[i]);
            }
        }
        setText(mobileNoArr.join(" "));
        props.showAlert("Mobile No. Extracted", "success");
    }

    const handleTextSpaceinNewLine = () => {
        let newText = text.split(" ").join("\n");
        setText(newText);
        props.showAlert("Text Space in New Line", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>
        <div className="row">
            <div className="col-md-12">
                <button className="btn btn-primary mx-2 my-1"  onClick={handleClickUpperCase} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleClickLowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleSentenceCase}>Sentence Case</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCapitalizedCase}>Capitalized Case</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleAlternatingCase}>AlTeRnAtInG cAsE</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleTitleCase}>Title cAsE</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleInverseCase}>Inverse cAsE</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleReverseTextCase}>Reverse Text</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleRemoveExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleDownloadText}>Download Text</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleEmailExtractor}>Email Extract</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleMobileNoExtractor}>Mobile No. Extract</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleTextSpaceinNewLine}>Text Space in New Line</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear Text</button>
            </div>
        </div>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter(Boolean).length} Words and {text.length} Characters </p>
        <p>{0.008 * text.split(" ").filter(Boolean).length} minutes take to read </p>
    </div>
    </>
  );
}
