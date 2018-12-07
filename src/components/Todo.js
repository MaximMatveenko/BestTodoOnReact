import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, key }) => (
  <div>
    <li>
      <div className="checkkkk" 
                onClick={onClick}
                style={{
                  backgroundColor: completed ? 'green' : 'red'
                }}>
      </div>
      <input
        type="text"
        className="editInput" 
        defaultValue={text} />
    </li>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
