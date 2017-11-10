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
    }
  }

  handlerInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  submitTodo = () => {
    const todoList = [...this.state.todoList];
    todoList.push(this.state.inputValue);
    this.setState({ todoList, inputValue: '' });
    console.log(this.state.todoList);
  }

  render() {
    const { inputValue, todoList } = this.state; // деструктивное присваивание

    return (
      <div className="container">
        <h1>ToDo List</h1>
        <div>
          <SimpleInput 
            type="text"
            name="todoItem"
            value={inputValue}
            placeholder="New task..."
            onChange={this.handlerInputChange}
          />
          <Button
            label="Add ToDo"
            onClick={this.submitTodo}
          />
        </div>
        <div>
          {
            todoList.map((item, index) => 
              <TodoItem 
                key={index} 
                number={index + 1} 
                name={item} 
               // {...item} //оператор разворота (передает объект в компонент, принимаем по ключам)
              />
            )
          }
        </div>
      </div>
    );
  }
}
