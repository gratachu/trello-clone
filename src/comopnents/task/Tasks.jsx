import React from 'react'
import Task from './Task'

const Tasks = ({taskList, setTaskList}) => {
  return (
    <div>
      {taskList.map((task) => (
        <Task task={task} taskList={taskList} setTaskList={setTaskList} />
      ))}
    </div>
  )
}

export default Tasks