// step 1 import
import React, { Component } from 'react';
import './App.css';

import Person from './Persons/Person';

// step 2 component
class App extends Component {
  state = {
    persons: [
      {name: "Farzad", age: "20", children: "His hobbies: Playing Guitar"},
      {name: "Ehsan", age: "24",},
      {name: "Mehdi", age: "30",},
    ],
    showPersons: false,
    ehsan: "ehsan",
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
    console.log("Im here");
    this.setState({ showPersons: !this.state.showPersons });
    console.log();
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>

        <button onClick={this.togglePersons}>Show Persons</button>


        {/*Performance HIT*/}

        {this.state.showPersons
          ?
          <div>
            <Person
              click={() => this.onSwitchNameClicked("Farzad!!!", "33")}
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}>
              {this.state.persons[0].children}
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age} />
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div>
          :
            <div />
        }
      </div>
    );
  }
}

//step 3 export
export default App;
