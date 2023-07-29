import React from 'react'

const Tasks = ({taskList}) => {
  return (
    <div>
      {taskList.map((task) => (
        <div>{task.text}</div>
      ))}
    </div>
  )
}

export default Tasks