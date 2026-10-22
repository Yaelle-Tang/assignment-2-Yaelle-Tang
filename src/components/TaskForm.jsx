import React from 'react'
import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (text.trim() === '') return
    onAddTask(text.trim())
    setText('')
  }
  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a new task'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  )
}

export default TaskForm
