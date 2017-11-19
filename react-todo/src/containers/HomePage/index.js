import React, { Component } from 'react';
import { Section, Form, Title, InputBlock, ListWrapper } from './../../components/styledComponents.js';
import TodoItem from './../../components/TodoItem';
import Input from './../../components/Input';
import SubmitButton from './../../components/ButtonSubmit';
import './main.css';

const validation = (value) => {
  if(value.length > 0) {
    return true;
  } else {
    return false;
  }
}

export default class HomePage extends Component {

  constructor() {
    super(); // наследование свойств родительского класса
    this.state = {
      inputValue: '',
      todoList: [],
      inputValid: true,
    }
  }

  // componentDidMount() {
  //   fetch("store.json")
  //   .then(response => response.json())
  //   .then(json => {
  //     this.setState({
  //       todoList: json
  //     })
  //   })
  // }

  handlerInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
      inputValid: validation(event.target.value)
    });
  }

  submitTodo = (e) => {
    e.preventDefault();
    if(this.state.inputValue) {
      const TODO_ITEM = {
        number: this.state.todoList.length,
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

  deleteTodo = (e) => {
    e.preventDefault();
    const FILTERED_LIST = this.state.todoList.filter(item => item.number + 1 !== Number(e.target.id));
    this.setState({
      todoList: FILTERED_LIST
    });
    setTimeout(() => this.renumberList(), 1)
  }

  renumberList = () => {
    let number = -1;
    let renumberedList = [];
    this.state.todoList.map((item) => {
      renumberedList.push({
        number: ++number,
        name: item.name
      })
    });
    this.setState({ 
      todoList: renumberedList
    })
  }

  render() {
    const { inputValue, todoList } = this.state; // деструктивное присваивание
    return (
      <Section>
        <Title>ToDo List</Title>
        <Form>
          <InputBlock>
            <Input 
              name="todoItem"
              value={inputValue}
              label="New Task"
              placeholder="Enter new task..."
              onChange={this.handlerInputChange}
              isValid={this.state.inputValid}
              errorText="Field can not be empty"
            />
            <SubmitButton
              onClick={this.submitTodo}
            />
          </InputBlock>
          <ListWrapper>
            {
              todoList.map((item) => 
                <TodoItem 
                  key={item.number} 
                  number={item.number + 1} 
                  name={item.name} 
                  onClickDelete={this.deleteTodo}
                // {...item} //оператор разворота (передает объект в компонент, принимаем по ключам)
                />
              )
            }
          </ListWrapper>
        </Form>
      </Section>
    );
  }
}
