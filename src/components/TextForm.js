import React, {useState} from 'react';


export default function TextForm(props) {

    const [text, setText] = useState('');
    const [undoText, setundoText] = useState('');
    const [redoText, setredoText] = useState('');
    const [isButtonDisableds, setButtonDisableds] = useState(false);
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const handleClickUpperCase = () => {
        setundoText(text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleClickLowerCase = () => {
        setundoText(text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleClearText = () => {
        setundoText(text);
        setText("");
        props.showAlert("Text Cleared", "success");
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleCapitalizedCase = () => {
        setundoText(text);
        let newText = text.toLowerCase();
        let newTextArr = newText.split(" ");
        for (let i = 0; i < newTextArr.length; i++) {
            newTextArr[i] = newTextArr[i].charAt(0).toUpperCase() + newTextArr[i].slice(1);
        }
        let newTextArrData = newTextArr.join(" ");
        newTextArrData = newTextArrData.split("\n");
        for (let i = 0; i < newTextArrData.length; i++) {
            newTextArrData[i] = newTextArrData[i].charAt(0).toUpperCase() + newTextArrData[i].slice(1);
        }
        setText(newTextArrData.join("\n"));
        props.showAlert("Converted to Capitalized Case", "success");
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleSentenceCase = () => {
        setundoText(text);
        let newText = text.toLowerCase();
        let newTextArr = newText.split(". ");
        for (let i = 0; i < newTextArr.length; i++) {
            newTextArr[i] = newTextArr[i].charAt(0).toUpperCase() + newTextArr[i].slice(1);
        }
        
        let newTextArrData = newTextArr.join(". ");
        newTextArrData = newTextArrData.split("\n");
        for (let i = 0; i < newTextArrData.length; i++) {
            newTextArrData[i] = newTextArrData[i].charAt(0).toUpperCase() + newTextArrData[i].slice(1);
        }
        setText(newTextArrData.join("\n"));
        props.showAlert("Converted to Sentence Case", "success");
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleAlternatingCase = () => {
        setundoText(text);
        let newText = text.toLowerCase();
        let newTextArr = newText.split("");
        for (let i = 0; i < newTextArr.length; i++) {
            if (i % 2 === 0) {
                newTextArr[i] = newTextArr[i].toUpperCase();
            }
        }
        setText(newTextArr.join(""));
        props.showAlert("Converted to Alternating Case", "success");
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleTitleCase = () => {
        setundoText(text);
        let newText = text.toLowerCase();
        let newTextArr = newText.split(" ");
        for (let i = 0; i < newTextArr.length; i++) {
            newTextArr[i] = newTextArr[i].charAt(0).toUpperCase() + newTextArr[i].slice(1);
        }
        setText(newTextArr.join(" "));
        props.showAlert("Converted to Title Case", "success");
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleInverseCase = () => {
        setundoText(text);
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
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleReverseTextCase = () => {
        setundoText(text);
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text Reversed", "success");
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleDownloadText = () => {
        setundoText(text);
        const element = document.createElement("a");
        const file = new Blob([text], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "text.txt";
        document.body.appendChild(element);
        element.click();
        props.showAlert("Text Downloaded", "success");
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleCopyToClipboard = () => {
        setundoText(text);
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard", "success");
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleRemoveExtraSpace = () => {
        setundoText(text);
        let newText = text.split(" ").filter(Boolean).join(" ");
        setText(newText);
        props.showAlert("Extra Space Removed", "success");
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleEmailExtractor = () => {
        setundoText(text);
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
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleMobileNoExtractor = () => {
        setundoText(text);
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
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleTextSpaceinNewLine = () => {
        setundoText(text);
        let newText = text.split(" ").join("\n");
        setText(newText);
        props.showAlert("Text Space in New Line", "success");
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleTextNewLinetoParagraph = () => {
        setundoText(text);
        let newText = text.split("\n").join(" ");
        setText(newText);
        props.showAlert("New Line to Paragraph", "success");
        setButtonDisabled(false);
        setButtonDisableds(false);
    }

    const handleUndo = () => {
        setButtonDisableds(true);
        setButtonDisabled(false);
        setText(undoText);
        setredoText(text);
        props.showAlert("Undo", "success");
    }
    
    const handleRedo = () => {
        setButtonDisabled(true);
        setButtonDisableds(false);
        setText(redoText);
        setundoText(text);
        props.showAlert("Undo", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
    <>
    <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label float-end">
                <button type="button" disabled={text.length===0 || isButtonDisableds} className="btn btn-primary btn-sm mx-1" title="Undo" onClick={handleUndo}><span className='fa fa-undo'></span></button>
                <button type="button" disabled={text.length===0 || isButtonDisabled} class="btn btn-primary btn-sm" title="Redo" onClick={handleRedo}><span className='fa fa-redo'></span></button>
            </label>
            <textarea className="form-control" onChange={handleOnChange} value={text} rows="8" placeholder='Enter Text Here'></textarea>
        </div>
        <div className="row">
            <div className="col-md-12">
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"  onClick={handleClickUpperCase} >Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClickLowerCase}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSentenceCase}>Sentence Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCapitalizedCase}>Capitalized Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleAlternatingCase}>AlTeRnAtInG cAsE</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleTitleCase}>Title cAsE</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleInverseCase}>Inverse cAsE</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReverseTextCase}>Reverse Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemoveExtraSpace}>Remove Extra Space</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDownloadText}>Download Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleEmailExtractor}>Email Extract</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleMobileNoExtractor}>Mobile No. Extract</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleTextSpaceinNewLine}>Text Space in New Line</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleTextNewLinetoParagraph}>New Line to Paragraph</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear Text</button>
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
