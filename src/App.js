import React from 'react';

import ChoreList from './components/ChoreList';
import ChoreForm from './components/ChoreForm';
import './App.css';

const chores = [
  { task: "Rake leaves",
    id: 0,
    completed: false
  },
  { task: "Feed dog",
    id: 1,
    completed: false
  },
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      chores: chores
    }
  }

  strikeChore = choreId => {
    this.setState({
      chores:this.state.chores.map(chore => {
        if(chore.id === choreId) {
          return {
            ...chore,
            completed: !chore.completed
          }
        }
        return chore;
      })
    });
  }

  addChore = choreName => {
    const addedChore = {
      name:choreName,
      id: this.state.chores.length,
      completed: false
    };

    const newChores = [...this.state.chores, addedChore];
    console.log(newChores)
    console.log(this.state.chores)

    this.setState({
      chores: newChores
    });

    console.log(newChores)
    console.log(this.state.chores)
  }

  filterCompletedChores = () => {
    const newChores = this.state.chores.filter(chore => {
      return (!chore.completed);
    });
    this.setState({
      chores: newChores
    })
  }

  render() {
    return (
      <div>
        <h2>React Class Components ToDo App</h2>
        <ChoreForm addChore={this.addChore}/>
        <ChoreList
        chores={this.state.chores}
        filterCompletedChores={this.filterCompletedChores}
        strikeChore={this.strikeChore}
        />
      </div>
    );
  }
}

export default App;
