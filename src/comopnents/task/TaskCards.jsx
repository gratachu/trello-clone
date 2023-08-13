import React, { useState } from 'react'
import TaskCard from './TaskCard'
import AddTaskCardButton from './button/AddTaskCardButton'

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([{
    id: 0,
    draggableId: '0-draggable',
  }])

  return (
    <div className='taskCardsArea'>
      {taskCardsList.map(taskCardList => (
        <TaskCard key={taskCardList.id}/>
      ))}
      <AddTaskCardButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList} 
      />
    </div>
  )
}

export default TaskCards
