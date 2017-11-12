import React, { Component } from 'react';
import TodoItem from './../../components/TodoItem';
import SimpleInput from './../../components/SimpleItem';
import Button from './../../components/Button';
import './main.css';

export default class HomePage extends Component {

  constructor() {
    super(); // наследование свойств родительского класса
    this.state = {
      inputValue: '',
      todoList: [],
      inputValid: false,
    }
  }

  handlerInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  submitTodo = (e) => {
    e.preventDefault();
    if(this.state.inputValue) {
      const TODO_ITEM = {
        number: this.state.todoList.length + 1,
        name: this.state.inputValue
      }
      const TODO_LIST = [...this.state.todoList];
      TODO_LIST.push(TODO_ITEM);
      this.setState({ 
        todoList: TODO_LIST, 
        inputValue: '',
        inputValid: true 
      });
    } else {
      this.setState({
        inputValid: false
      })
    }
  }

  deleteTodo = (name) => {
    const filteredList = this.state.todoList.filter(item => item.name !== name);
    this.setState({
      todolist: filteredList
    })
  }

  render() {
    const { inputValue, todoList } = this.state; // деструктивное присваивание
    return (
      <div className="container">
        <h1>ToDo List</h1>
        <form
          className="formWrapper"
        >
          <div>
            <SimpleInput 
              type="text"
              name="todoItem"
              value={inputValue}
              placeholder="New task..."
              onChange={this.handlerInputChange}
              isvalid={this.state.inputValid}
              errortext="Field can not be empty"
            />
            <Button
              label="Add ToDo"
              onClick={this.submitTodo}
            />
          </div>
          <div>
            {
              todoList.map((item) => 
                <TodoItem 
                  key={item.number} 
                  number={todoList.length + 1} 
                  name={item.name} 
                  deletetodo={() => this.deleteTodo(item.name)}
                // {...item} //оператор разворота (передает объект в компонент, принимаем по ключам)
                />
              )
            }
          </div>
        </form>
      </div>
    );
  }
}
