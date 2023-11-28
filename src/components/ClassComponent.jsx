import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      img: "/mypic.jpg",
      fullName: "SAWSEN AYARI",
      profession: "Engineer",
      bio: "My name is Sawsen Ayari and I am a junior web developer. I am an accomplished coder and programmer, and I enjoy using my skills to contribute to the exciting technological advances. I have a bachelor's degree in software development. While in school, I earned Awards for my exemplary academic performances",
      counter: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  render() {
    return (
      <div className="container">
        <div className="cart">
          <div className="image">
            <img src={this.state.img} alt="" width={150} />
          </div>
          <div className="info">
            <h1>Full Name: {this.state.fullName}</h1>
            <h2>profession: {this.state.profession}</h2>
            <p>My bio: {this.state.bio}</p>
          </div>
        </div>
        <div className="counter">{this.state.counter} s</div>
      </div>
    );
  }
}
