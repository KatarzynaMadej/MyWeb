import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  // done.sort((a, b) => b.finishDate - a.finishDate);
  // a drugi sposób poniżej:
  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate > b.finishDate) {
        return -1;
      }
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      return 0;
    });
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <div>
      <div className="active">
        <h2>Tasks to be done: </h2>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p
            style={{
              fontSize: 20,
              color: "#00d05d",
              textAlign: "center",
            }}
          >
            "Great! You have time off!"
          </p>
        )}
      </div>
      <hr />
      <div className="done">
        <h2>
          Done: <em>({done.length})</em>
        </h2>
        {done.length > 5 && (
          <span style={{ fontSize: 11 }}>
            Wyświetlonych jest tylko 5 ostatnich zadań
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </div>
  );
};

export default TaskList;
