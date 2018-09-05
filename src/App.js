// step 1 import
import React, { PureComponent } from 'react';
import './App.css';

import Person from './Persons/Person';

// step 2 component
class App extends PureComponent {
  constructor(props) {
    console.log("Inside App.js constructor");
    super(props);

    this.state = {
      persons: [
        {id: "asdasd",name: "Farzad", age: "20", children: "His hobbies: Playing Guitar"},
        {id: "32135",name: "Ehsan", age: "24",},
        {id: "532153412",name: "Mehdi", age: "30",},
      ],
      showPersons: false,
      whichStyle: "one",
    }
  }

  componentWillMount() {
    console.log("Inside App.js componentWillMount");
  }

  nameChangeHandler = (event, index) => {
    const persons = this.state.persons; // [{}, {}, {}]

    // console.log("App.js", event.target.value);

    persons[index].name = event.target.value;

    this.setState({ persons });
  }

  onSwitchNameClicked = (name, age) => {
    // this.state.persons[0].name = "Farbod";
    // this.state.persons[2].age = "31";
    // DO NOT TRY THIS AT HOME!!

    const persons = this.state.persons;

    persons[0].name = name;
    persons[2].age = age;

    this.setState({ persons });
  }

  togglePersons = () => {
    this.setState({
      showPersons: !this.state.showPersons,
      whichStyle: this.state.whichStyle === 'one' ? 'two' : 'one',
     });
  }

  componentWillMount() {
    console.log("Inside App.js componentWillMount");
  }


  render() {
    console.log("Inside App.js render");
    const { buttonStyleOne, buttonStyleTwo } = styles;

    let persons = [];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, index)}
                />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>

        <button
          style={this.state.whichStyle === 'one' ? buttonStyleOne : buttonStyleTwo}
          onClick={this.togglePersons}>
          Show Persons
        </button>

        {persons}

      </div>
    );
  }
}

const styles = {
  buttonStyleOne: {
    backgroundColor: 'white',
    font: 'inherit',
    border: '2px soid rgb(10, 174, 190)',
    pading: '8px',
    cursor: 'pointer',
  },
  buttonStyleTwo: {
    backgroundColor: 'red',
    font: 'inherit',
    border: '2px soid rgb(10, 174, 190)',
    pading: '8px',
    cursor: 'pointer',
  },
}

//step 3 export
export default App;
