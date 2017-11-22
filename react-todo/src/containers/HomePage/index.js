import React, { Component } from 'react';
import { Section, Form, Title, InputBlock, ListWrapper } from './../../components/styledComponents';
import TodoItem from './../../components/TodoItem';
import Input from './../../components/Input';
import SubmitButton from './../../components/ButtonSubmit';

const validation = (value) => value.length > 0;

export default class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
      todoList: [],
      inputValid: true,
      listItemEditing: ''
    }
  }

  handlerInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
      inputValid: validation(event.target.value)
    });
  }

  submitTodo = (event) => {
    event.preventDefault();
    if(this.state.inputValue) {
      const TODO_LIST = [...this.state.todoList];
      if(this.state.listItemEditing === '') {
        const TODO_ITEM = {
          number: this.state.todoList.length,
          name: this.state.inputValue
        }
        TODO_LIST.push(TODO_ITEM);
        this.setState({ 
          todoList: TODO_LIST, 
          inputValue: '',
          inputValid: true 
        })
      } else {
        const EDITED_ITEM = {
          number: this.state.listItemEditing,
          name: this.state.inputValue
        };
        TODO_LIST.map(item => {
          if(item.number == EDITED_ITEM.number) {
            item.name = EDITED_ITEM.name
          }
        });
        this.setState({
          todoList: TODO_LIST,
          inputValue: '',
          listItemEditing: ''
        })
      }
    } else {
      this.setState({
        inputValid: false
      })
    }
  }

  editTodo = (event) => {
    event.preventDefault();
    const ITEM_TO_EDIT = this.state.todoList.filter(item => item.number + 1 === Number(event.target.id));
    this.setState({
      listItemEditing: ITEM_TO_EDIT[0].number,
      inputValue: ITEM_TO_EDIT[0].name,
    });
  }

  deleteTodo = (event) => {
    event.preventDefault();
    const FILTERED_LIST = this.state.todoList.filter(item => item.number + 1 !== Number(event.target.id));
    this.setState({
      todoList: FILTERED_LIST
    });
    setTimeout(() => this.renumberList(), 1)
  }

  renumberList = () => {
    let number = -1;
    const RENUMBERED_LIST = [];
    const TODO_LIST = [...this.state.todoList];
    TODO_LIST.map(item => 
      RENUMBERED_LIST.push({
        number: ++number,
        name: item.name
      })
    );
    this.setState({ 
      todoList: RENUMBERED_LIST
    })
  }

  render() {
    const { inputValue, todoList, inputValid, listItemEditing } = this.state;
    return (
      <Section>
        <Title>ToDo List</Title>
        <Form>
          <InputBlock>
            <Input 
              name="todoItem"
              placeholder="Enter new task..."
              errorText="Field can not be empty"
              value={inputValue}
              onChange={this.handlerInputChange}
              isValid={inputValid}
            />
            <SubmitButton
              onClick={this.submitTodo}
              editMode={listItemEditing === ''}
            />
          </InputBlock>
          <ListWrapper>
            {
              todoList.map((item) => 
                <TodoItem 
                  key={item.number} 
                  number={item.number + 1} 
                  name={item.name} 
                  onClickEdit={this.editTodo}
                  onClickDelete={this.deleteTodo}
                />
              )
            }
          </ListWrapper>
        </Form>
      </Section>
    );
  }
}
