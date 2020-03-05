import React from 'react';


export class NumberOfTodos extends React.PureComponent {
  render() {
    console.log('NumberOfTodos is rendering!')
    return (
      <div>We have {this.props.numberOfTodos} todos!</div>
    )
  }
}

const globalTodos = ['global todo!']

export class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      numberOfTimesClicked: 0,
      // todos: [],
    }
  }

  onClickHandler = () => {
    globalTodos.push(`Todo #${this.state.numberOfTimesClicked}`)
    this.setState({
      numberOfTimesClicked: this.state.numberOfTimesClicked + 1,
      // todos: [...this.state.todos, `Todo #${this.state.numberOfTimesClicked}`],
    })
  }

  render() {
    // console.log('todos = ', this.state.todos)
    console.log('numberOfTimesClicked = ', this.state.numberOfTimesClicked)
    return (
      <header className="App-header">
        <button onClick={this.onClickHandler}>Add todo</button>
        {/* {this.state.todos.map(todo => (
          <div key={todo}>{todo}</div>
        ))} */}
        {globalTodos.map(todo => (
          <div key={todo}>{todo}</div>
        ))}
        {/* <NumberOfTodos numberOfTodos={this.state.todos.length} /> */}
        {/* <NumberOfTodos numberOfTodos={0} /> */}
      </header>
    )
  }
}
