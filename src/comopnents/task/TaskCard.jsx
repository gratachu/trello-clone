import React, { useState } from 'react'
import TaskCardTitle from './TaskCardTitle'
import TaskCardDeleteButton from './button/TaskCardDeleteButton'
import TaskAddInput from './input/TaskAddInput'
import Tasks from './Tasks' 

const TaskCard = () => {
  // TaskAddInputで入力した値をTasksに渡したいので、ここでstateを管理する
  const [inputText, setInputText] = useState('')
  const [taskList, setTaskList] = useState([])

  return (
    <div className='taskCard'>
      <div className='taskCardTitleAndTaskCardDeleteButtonArea'>
        <TaskCardTitle />
        <TaskCardDeleteButton />
      </div>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks
        inputText={inputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  )
}

export default TaskCard
