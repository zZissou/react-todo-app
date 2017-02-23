import React, {Component} from 'react'
import TodoModel from '../models/Todo'
import Todos from '../components/Todos'
import CreateTodoForm from '../components/CreateTodoForm'

class TodosContainer extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    TodoModel.all().then( (res) => {
      this.setState ({
        todos: res.data,
        todo: ''
      })
    })
  }
  createTodo(todo){
    let newTodo = {body: todo, completed: false}
    TodoModel.create(newTodo).then( (res) => {
      let todos = res.data
      this.setState({todos})
    })
  }
  editTodo(todo){
    this.setState({
      editingTodoId: todo.id
    })
  }
  render(){
    return (
      <div className='TodosContainer'>
      <h2>This is the Todos Container</h2>
      <Todos
        todos={this.state.todos}
        editingTodoId={this.state.editingTodoId}
        onEditTodo={this.editTodo.bind(this)}
        onDeleteTodo={this.deleteTodo.bind(this)} />
      <CreateTodoForm
        createTodo={this.createTodo.bind(this)} />
    </div>
    )
  }
}

export default TodosContainer
