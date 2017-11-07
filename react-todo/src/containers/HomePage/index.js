import React, { Component } from 'react';
import TodoItem from './../../components/TodoItem';
import './main.css';

export default class HomePage extends Component {
  render() {
    const TODO_LIST = [
      {
        number: 1,
        name: 'Item 1'
      },
      {
        number: 2,
        name: 'Item 2'
      },
      {
        number: 3,
        name: 'Item 3'
      },
      {
        number: 4,
        name: 'Item 4'
      },
    ];
    return (
      <div className="container">
        <h1>ToDo List</h1>
        <ul>
          {
            TODO_LIST.map(item => 
              <TodoItem 
                key={item.number} 
                // number={item.number} 
                // name={item.name} 
                {...item} //оператор разворота (передает объект в компонент, принимаем по ключам)
              />
            )
          }
        </ul>
      </div>
    );
  }
}
