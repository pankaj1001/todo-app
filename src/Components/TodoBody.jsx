import React, { Component } from "react";
import Todoitem from "./Todoitem";
export default class TodoBody extends Component {
  state = {
    search: '',
    showAll: false
  };
  onMarkComplete = id => {
    this.props.onMarkComplete(id);
  };
  onDelete = id => {
    this.props.onDelete(id);
  };
  onClick=()=>{
      this.setState({showAll:!this.state.showAll})
  }
  onSearch=(e)=>{
      this.setState({search:e.target.value})
  }
  filtered=(input)=>{
    let filter = input.filter(item => {
        return !item.completed;
      });
      return filter;
  }
  getAllTodos = () => {
    let output=this.props.todos;
    if(this.state.search!==''){
        output=output.filter(item => {
            var index = item.task.toLocaleLowerCase().search(this.state.search);
            return index >= 0;
          });
    }
    if(!this.state.showAll){
        output=this.filtered(output);
    }
    let allTodos = output.map(item => {
      return (
        <li key={item.id}>
          <Todoitem
            onMarkComplete={this.onMarkComplete}
            onDelete={this.onDelete}
            obj={item}
          />
        </li>
      );
    });
    return allTodos;
  };
  render() {
    return (
      <div className="todo-body">
        <input type="search" placeholder="Search Todo" value={this.state.search} onChange={(e)=>this.onSearch(e)} /><br/>
        <div className="search-container"><input type="checkbox" onChange={this.onClick} /><span className="checkbox-text">Show All Todos</span></div>
        <ul>{this.getAllTodos()}</ul>
      </div>
    );
  }
}
