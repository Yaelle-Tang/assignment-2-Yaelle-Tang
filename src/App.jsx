import './App.css'
import { useState } from 'react'

import calendarIcon from './assets/calendar_icon.png'
import inboxIcon from './assets/inbox_icon.png'
import menuIcon from './assets/menu_icon.png'
import searchIcon from './assets/search_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'

import TaskCounter from './components/TaskCounter'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

// Assignment 2: build the Task Manager here.
// Step 1 (after the Oct 12 class): hard-coded tasks, the five components, props.
// Step 2 (after the Oct 19 class): useState, the controlled form, toggle, delete, filtering.
const initialTasks = [
  { id: 1, text: 'Call Mom', completed: false },
  { id: 2, text: 'Buy the new issue of Scientific American', completed: true },
  { id: 3, text: 'Return the textbook to Jose', completed: false },
  { id: 4, text: 'Buy the new album by Rake', completed: false },
  { id: 5, text: 'Buy a gift card for Dad', completed: false },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('all')

  function handleAddTask(text) {
    setTasks([{ id: Date.now(), text, completed: false }, ...tasks])
  }
  function handleToggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }
  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const visibleTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true // 'all'
  })

  return (
    <div className='container'>
      <header className='header'>
        {/* <!-- Menu button --> */}
        <button id='btn-menu' className='btn-menu'>
          <img src={menuIcon} />
        </button>
        {/* <!-- search box --> */}
        <form className='search-form'>
          <img src={searchIcon} className='search-icon' />
          <input
            type='text'
            id='quick-find'
            className='search-input'
            placeholder='Quick find'
          />
        </form>
        <TaskCounter
          total={tasks.length}
          completed={tasks.filter((t) => t.completed).length}
        />
      </header>
      <nav id='sidebar' className='sidebar'>
        <ul className='nav-list'>
          <li className='task'>
            <img src={inboxIcon} className='task-icon' />
            <div className='task-name'>Inbox</div>
            <div className='task-count'>{tasks.length}</div>
          </li>
          <li className='task'>
            <img src={calendarIcon} alt='' className='task-icon' />
            <div className='task-name'>Today</div>
            <div className='task-count'>5</div>
          </li>
          <li className='task'>
            <img src={upcomingIcon} alt='' className='task-icon' />
            <div className='task-name'>Upcoming</div>
            <div className='task-count'></div>
          </li>
        </ul>
      </nav>
      <main className='main'>
        <h1>Inbox</h1>

        <div className='filter-bar'>
          <button
            className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <span>|</span>
          <button
            className={filter === 'active' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <span>|</span>
          <button
            className={
              filter === 'completed' ? 'filter-btn active' : 'filter-btn'
            }
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>

        <TaskForm onAddTask={handleAddTask} />
        <TaskList
          tasks={visibleTasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </main>
    </div>
  )
}

export default App
