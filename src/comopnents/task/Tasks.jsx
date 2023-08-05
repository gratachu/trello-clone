import React from 'react'
import Task from './Task'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const Tasks = ({taskList, setTaskList}) => {
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {taskList.map((task) => (
                <Task 
                  key={task.id}
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