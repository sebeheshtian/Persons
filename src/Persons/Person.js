import React, { Component } from 'react';
import './Person.css'

class Person extends Component {

  constructor(props) {
    console.log("Inside Person.js constructor");
    super(props);
  }

  componentWillMount() {
    console.log("Inside Person.js componentWillMount");
  }

  componentDidMount() {
    console.log("Inside Person.js componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Inside Person componentWillRecieveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Inside Person shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Inside Person componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {

    console.log("Inside Person componentDidUpdate");
  }

  render() {
    console.log("Inside Person.js render");
    return (
      <div className="Person">
        <h1 >Hello I'm {this.props.name}</h1>

        <p onClick={this.props.click}>I'm {this.props.age} years old</p>

        <p>{this.props.children}</p>

        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
