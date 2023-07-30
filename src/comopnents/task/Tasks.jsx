import React from 'react'
import Task from './Task'

const Tasks = ({taskList}) => {
  return (
    <div>
      {taskList.map((task) => (
        <Task task={task} />
      ))}
    </div>
  )
}

export default Tasks