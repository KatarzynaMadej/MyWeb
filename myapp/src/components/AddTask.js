import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleText = (e) => {
    // e.preventDefault();
    this.setState({
      text: e.target.value,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate,
        });
      }
    } else {
      alert("Nazwa zadania musi być dłuższa niż 2 znaki");
    }
  };

  handleToday = (e) => {
    e.preventDefault();
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate,
        });
      }
    } else {
      alert("Nazwa zadania musi być dłuższa niż 2 znaki");
    }
  };

  handleTomorrow = (e) => {
    e.preventDefault();
    let tomorrow = new Date();
    let tomorrowDate =
      tomorrow.getFullYear() +
      "-0" +
      (tomorrow.getMonth() + 1) +
      "-" +
      (tomorrow.getDate() + 1);
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: tomorrowDate,
        });
      }
    } else {
      alert("Nazwa zadania musi być dłuższa niż 2 znaki");
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <form submit="return false" className="form">
        <button type="submit" onClick={this.handleClick}>
          {" "}
          +{" "}
        </button>
        <input
          type="text"
          placeholder="Add task"
          value={this.state.text}
          onChange={this.handleText}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          id="important"
          onChange={this.handleCheckbox}
        />
        <label htmlFor="important" style={{ color: "red", fontSize: 40 }}>
          !
        </label>
        <br />
        <button className="date" onClick={this.handleToday}>
          Today
        </button>
        <button className="date" onClick={this.handleTomorrow}>
          Tomorrow
        </button>
        <label htmlFor="date">Other:</label>
        <input
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <br />
      </form>
    );
  }
}

export default AddTask;
