import React, { Component } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import TodoBody from './Components/TodoBody';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:[]
    }
  }
  componentDidMount(){
    var items=localStorage.getItem("todos");
    var parse=JSON.parse(items)
    this.setState({
      todos:parse
    })
  }
  handleDelete=(id)=>{
    let todos=this.state.todos.filter(item=>{return item.id!==id})
    localStorage.setItem("todos",JSON.stringify(todos))
    this.setState({todos})
  }
  handleMarkComplete=(id)=>{
    let todos=this.state.todos.map(item=>{
      if(item.id===id){
        return {id:item.id,task:item.task,completed:!item.completed}
      }
      return item;
    })
    localStorage.setItem("todos",JSON.stringify(todos))
    this.setState({todos})
  }
  handleSubmit=(value)=>{
    var todo={
      id:new Date(),
      task:value,
      completed:false
    }
    var todos=this.state.todos.concat(todo);
    localStorage.setItem("todos",JSON.stringify(todos))
    this.setState({
      todos
    })
  }
  render(){
    return (
      <div className="todo-container">
      <center><h1>Todo List</h1></center>
        <AddTodo onSubmit={this.handleSubmit}/>
        <TodoBody todos={this.state.todos} onDelete={this.handleDelete} onMarkComplete={this.handleMarkComplete}/>
      </div>
    )
  }
}

export default App;
