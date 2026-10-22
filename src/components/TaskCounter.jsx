import checkIcon from '../assets/check_icon.png'

function TaskCounter({ total, completed }) {
  return (
    <div className='task-counter'>
      <img src={checkIcon} className='check-icon' />
      <span>
        {total} / {completed}
      </span>
    </div>
  )
}
export default TaskCounter
