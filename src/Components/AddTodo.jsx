import React,{Component} from 'react';

export default class AddTodo extends Component{
    state={
        todo:''
    }
    onChange=(e)=>{
        this.setState({
            todo:e.target.value
        })
    }
    onSubmit=()=>{
        this.props.onSubmit(this.state.todo);
        this.setState({todo:''})
    }
    render(){
        return (
            <div className="add-todo">
                <input type="text" value={this.state.todo} onChange={(e)=>{this.onChange(e)}} placeholder="Add Todo..."/>
                <input id="add-todo-btn" type="button" onClick={this.onSubmit} value="Add Todo"/>
            </div>
        )
    }
}