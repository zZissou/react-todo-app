import React, {Component} from 'react'
import TodoModel from '../models/Todo'

class TodosContainer extends Component {
  render(){
    TodoModel.all().then( (res) => {
      console.log(res);
    })
    return (
      <div className='todosContainer'>
        <h2>This is a todos container</h2>
      </div>
    )
  }
  deleteTodo(todo){
    TodoModel.delete(todo).then( (res) => {
      let todos = res.data
      this.setState({todos})
    })
  }
  render(){
    return (
      <div className="todosComponent">
        <Todos
          todos={this.state.todos}
          onDeleteTodo={this.deleteTodo.bind(this)} />
        <CreateTodoForm
          createTodo={this.createTodo.bind(this)} />
      </div>
    )
  }
}

export default TodosContainer
