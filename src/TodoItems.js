import React, { Component } from 'react';

export class TodoItems extends Component {

    createTasks = (item) => {
        return (
            <li key={item.key}>
                <input className="editInput" 
                type="text" 
                defaultValue={item.text} />
                <button 
                onClick={() => this.delete(item.key)} 
                className="taskDelBtn">
                    X
                </button>
            </li>
        )
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        let listItems = this.props.entries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        )
    }
}