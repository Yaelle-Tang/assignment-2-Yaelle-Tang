function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={task.completed ? 'task-items completed' : 'task-items'}>
      <input
        type='checkbox'
        id={`task-${task.id}`}
        className='task-checkbox'
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <label htmlFor={`task-${task.id}`}>{task.text}</label>
      <button
        className='btn-delete'
        aria-label='Delete task'
        onClick={() => onDeleteTask(task.id)}
      >
        ×
      </button>
    </li>
  )
}

export default TaskItem
