import React, { Component } from 'react';

export default class TodoItems extends Component {

    createTasks = (item) => {
        return ( <li key={item.key}>{item.text}
            <button onClick ={() => this.delete(item.key)}
            className="taskDelBtn">
            X
            </button>
            </li>
        )
    }

    delete(key) {
        this.props.delete(key);
    }

    // edit: function () {
        
    // }

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