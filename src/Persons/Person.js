import React from 'react';
import './Person.css'

const person = (props) => {

  return (
    <div className="Person">
      <h1 >Hello I'm {props.name}</h1>

      <p onClick={props.click}>I'm {props.age} years old</p>

      <p>{props.children}</p>
    </div>
  );

  // return React.createElement('div', {},
  // React.createElement('p', {}, "Hello I'm Farzad"))
}

export default person;
