import React, { Component } from 'react';

export class TodoItems extends Component {

    createTasks = (item) => {
            return ( <li key={item.key}> 
                        <input className="editInput" type="text" defaultValue={item.text}></input>
                        <button onClick ={() => this.delete(item.key)}className="taskDelBtn">
                        X
                        </button>
                      </li>
            )
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        )
    }
}