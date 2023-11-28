import React, { Component } from "react";
import ClassComponent from "./components/ClassComponent";
import "./App.css"

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      show : false,
    }
  }
  render() {
    return (
      <div className="App">
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            Show
          </button>
        </div>
        {this.state.show && <ClassComponent />}
      </div>
    );
  }
}

