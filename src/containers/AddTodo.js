import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <h2 className="legacy">ToDo:</h2>
      <div className="TaskInput">
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
          <input 
          className="TextInput"
          placeholder="What do you need to do?"
          ref={node => input = node} />
          <button 
          className="saveBtn"
          type="submit">
            Add
          </button>
        </form>
      </div>

    </div>
  )
}

export default connect()(AddTodo)
