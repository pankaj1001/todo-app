import React, { Component } from "react";

export default class Todoitem extends Component {
  delete = () => {
    this.props.onDelete(this.props.obj.id);
  };
  onClick = () => {
    this.props.onMarkComplete(this.props.obj.id);
  };
  render() {
    return (
      <div className="todo-items search-container">
        <div className="line" >
          {/* <h3 className="line">
            {this.props.obj.completed ? "Done: " : "Pending: "}
          </h3> */}
          <input type="checkbox" checked={this.props.obj.completed?true:false}  onChange={this.onClick}/>
        </div>
        <div className="line">
          {/* <h3 className="line">{this.props.obj.task} </h3> */}
          <span className="checkbox-text">{this.props.obj.task}</span>
        </div>
        <div className="line">
          <input className="delete-btn" type="button" onClick={this.delete} value="Delete" />
        </div>
      </div>
    );
  }
}
