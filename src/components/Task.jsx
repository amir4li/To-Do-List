import React from "react";

function Task(props) {
    function handleClick() {
        props.onDelete(props.id)
    };

    return(
        <div className="task">
            <h3>{props.task}</h3>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
};

export default Task;
