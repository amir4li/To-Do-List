import React from "react";

function Form(props) {

    const [inputText, setInputText] = React.useState("");

    function handleChange(event) {
        setInputText(event.target.value)
    };

    function handleClick() {
        props.onAdd(inputText);
        setInputText("")
    };

    return(
        <div className="form">
            <input onChange={handleChange} value={inputText} type="text" />
            <button onClick={handleClick}>Add</button>
        </div>
    );

};

export default Form;
