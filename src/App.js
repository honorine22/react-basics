import React, { Component } from 'react';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import "./App.css";

class App extends Component {

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

deleteCharHandler = ( index ) => {
  const text = this.state.userInput.split('');
  text.splice(index, 1);
  const updatedText = text.join('');
  this.setState({userInput: updatedText});
}

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover' : {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch}
      clicked={() => this.deleteCharHandler(index)}
      key={index} />;
    });

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    const classes = [];
  if (this.state.persons.length <= 2) {
    classes.push('red');
  } 
  if(this.state.persons.length <= 1) {
    classes.push('bold');
  }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
        className="button" 
          onClick={this.togglePersonsHandler}
          >Toggle Persons
        </button>

        {persons}
        <hr />
        <input 
        type="text" 
        onChange={this.inputChangeHandler} 
        value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
