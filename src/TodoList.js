import React, { Component } from 'react';
import { TodoItems } from './TodoItems';


export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  addItem = (e) => {
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";

    e.preventDefault();
  }


  deleteItem = (key) => {
    let filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key)
    });

    this.setState({
      items: filteredItems
    });
  }


  render() {
    return (
      <div className="App">
        <div className="legacy">
          ToDo:
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
        <hr></hr>
        <div className="TaskInput">
          <form onSubmit={this.addItem}>
            <input ref={(node) => { this._inputElement = node }}
              className="TextInput"
              placeholder="What do you need to do?">
            </input>
            <button type="submit" className="saveBtn">
              add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      </div>
    );
  }
}