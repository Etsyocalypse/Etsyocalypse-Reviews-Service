import React from 'react';
import axios from 'axios';
import Task from './Task.js';
import Message from './Message.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            item: ''
        }
        this.enterItem = this.enterItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    enterItem(event) {
        let newItem = event.target.value;
        this.setState({
          item: newItem
      });
    }

    addItem(event) {
        event.preventDefault();
        let todoItem = this.state.item;
        axios.post('http://localhost:3000/addTask', {
            task: todoItem
        })
        .then((response) => {
            this.setState({
              todos: [...this.state.todos, { id: response.data.insertId, task: todoItem } ],
              item: ''
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteItem(event) {
        event.preventDefault();
        axios.delete(`http://localhost:3000/deleteTask`, {
           data: {
            id: event.target.dataset.id
           }    
        })
        .then((response) => {
            //console.log(event.target.dataset.id)
            let updatedTodos = [...this.state.todos];
            console.log(response);
            for (var i = 0; i < updatedTodos.length; i++) {
                
                 if (updatedTodos[i].id === response.data) {
                     updatedTodos.splice(i, 1);
                     this.setState({
                        todos: updatedTodos
                     });
                     break;
                 }
            }
            
        })
        .catch((error) => {
            console.log(error);
        });
    }

    componentDidMount() {
      // get grocery items  
        axios.get('http://localhost:3000/tasks')
        .then((response) => {
            let todoItems = response.data;
            this.setState({
                todos: todoItems, // post request obj body values
                item: ''
            });
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render() {
        return (
        <div>
            <h1>Taskly</h1>
            <input type="text" value={this.state.item} onChange={this.enterItem}></input>
            <button onClick={this.addItem}>Add Task</button>
            <Message tasks={this.state.todos}/>
            <Task tasks={this.state.todos} deleteItem={this.deleteItem}/>
        </div>
        )
    }
}
