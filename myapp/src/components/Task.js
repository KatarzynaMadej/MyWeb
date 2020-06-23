import React from "react";
import "./Task.css";

const Task = (props) => {
  const style = {
    color: "red",
  };

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>
            {" "}
            <button onClick={() => props.change(id)}>V</button>
            {text}
          </strong>{" "}
          - do <span> {date} </span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();

    return (
      <div>
        <p>
          <strong>{text}</strong> <em>(make to: {date}) </em>
          <br /> - done <span>{finish}</span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};
export default Task;
