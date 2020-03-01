import React from 'react';

export class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      numberOfTimesClicked: 0,
      todos: [],
    }
  }

  onClickHandler = () => {
    this.setState({
      numberOfTimesClicked: this.state.numberOfTimesClicked + 1,
      todos: [...this.state.todos, `Todo #${this.state.numberOfTimesClicked}`],
    })
  }

  render() {
    console.log('todos = ', this.state.todos)
    console.log('numberOfTimesClicked = ', this.state.numberOfTimesClicked)
    return (
      <header className="App-header">
        <button onClick={this.onClickHandler}>Add todo</button>
        {this.state.todos.map(todo => (
          <div key={todo}>{todo}</div>
        ))}
        We have {this.state.todos.length} todos!
      </header>
    )
  }
}
