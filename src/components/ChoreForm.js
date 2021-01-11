import React from 'react'

class ChoreForm extends React.Component {
  constructor(){
    super();
    this.state = {
      inputValue:""
    }
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.inputValue)
    this.props.addChore(this.state.inputValue);
    this.setState({
      inputValue:""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        name="chore"
        placeholder="Enter a new chore"
        onChange={this.handleChange}
        value={this.state.inputValue}
        />
        <button>Add Chore</button>
      </form>
    );
  }
}

export default ChoreForm;
