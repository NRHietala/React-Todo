import React from 'react';

import ChoreList from './components/ChoreList';
import ChoreForm from './components/ChoreForm';
import './App.css';

const initialChores = [
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
      chores: initialChores
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
    const chore = {
      name:choreName,
      id: this.state.chores.length,
      completed: false
    };

    const newChores = [...this.state.chores, chore];
    console.log(newChores)

    this.setState({
      chores:newChores 
    });
  }

  filterCompletedChores = () => {
    this.setState({
      chores: this.state.chores.filter(chore => {
        return (!chore.completed)
      })
    })
  }


  render() {
    return (
      <div>
        <h2>React Class Components ToDo App</h2>
        <ChoreForm addChore={this.addChore}/>
        <ChoreList chores={this.state.chores}
        choreCompleted={this.choreCompleted}
        strikeChore={this.strikeChore}
        />
      </div>
    );
  }
}

export default App;
