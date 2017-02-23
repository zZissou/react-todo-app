import axios from 'axios'

class TodoModel {
  static all(){
    let request = axios.get("http://localhost:4000/todos")
    return request
  }
}

export default TodoModel
