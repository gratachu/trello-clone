import React from 'react'
import Task from './Task'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const Tasks = ({taskList, setTaskList}) => {
  const reorder = (taskList, startIndex, endIndex) => {
    const remove = taskList.splice(startIndex, 1)
    taskList.splice(endIndex, 0, remove[0])
  }

  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index)

    setTaskList(taskList)
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {taskList.map((task, index) => (
                <Task 
                  key={task.id}
                  index={index}
                  task={task}
                  taskList={taskList}
                  setTaskList={setTaskList}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks