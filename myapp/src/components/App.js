import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 1;
  state = {
    tasks: [
      {
        id: 0,
        text: "umyć auto",
        date: "2018-05-28",
        important: false,
        active: true,
        finishDate: null,
      },
      // {
      //   id: 1,
      //   text: "zagrać wreszcie w Wiedźmina",
      //   date: "2020-07-15",
      //   important: true,
      //   active: true,
      //   finishDate: null,
      // },
      // {
      //   id: 2,
      //   text: "pojechać do sklepu",
      //   date: "2020-06-05",
      //   important: false,
      //   active: true,
      //   finishDate: null,
      // },
      // {
      //   id: 3,
      //   text: "nakarmić gołębie",
      //   date: "2020-06-10",
      //   important: false,
      //   active: true,
      //   finishDate: null,
      // },
      // {
      //   id: 4,
      //   text: "spacer z Julią",
      //   date: "2020-05-20",
      //   important: false,
      //   active: true,
      //   finishDate: null,
      // },
      // {
      //   id: 5,
      //   text: "kino z Piotrkiem",
      //   date: "2020-05-16",
      //   important: true,
      //   active: true,
      //   finishDate: null,
      // },
      // {
      //   id: 6,
      //   text: "przytyć 10 kg",
      //   date: "2020-08-16",
      //   important: false,
      //   active: true,
      //   finishDate: null,
      // },
      // {
      //   id: 7,
      //   text: "zostać prezesem",
      //   date: "2020-07-22",
      //   important: false,
      //   active: true,
      //   finishDate: null,
      // },
      // {
      //   id: 8,
      //   text: "zarabiać miliony",
      //   date: "2020-12-31",
      //   important: true,
      //   active: true,
      //   finishDate: null,
      // },
    ],
  };

  deleteTask = (id) => {
    // const tasks = [...this.state.tasks]; - 1.sposób zrobienia kopii tablicy
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({ tasks });

    let tasks = [...this.state.tasks];
    // 2. sposób zrobienia kopii tablicy
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    let tasks = Array.from(this.state.tasks);
    // 3. sposób zrobienia kopii tablicy
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important,
      active: true,
      finishDate: null,
    };
    this.counter++;

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1 className="header">
          {/* Don't be busy. Be productive!<br /> */}
          Let's do this!
        </h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
