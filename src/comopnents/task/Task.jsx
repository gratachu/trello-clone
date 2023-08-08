import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const Task = ({task, taskList, setTaskList, index}) => {
  const handleDelete = (id) => {
    // setTaskListでtaskListを更新する
    // taskListの中からクリックしたidとtaskのidが一致するものを除外した配列をsetTaskListに渡す

    setTaskList(taskList.filter((task) => task.id !== id))
  }

  return (
    <Draggable draggableId={task.draggableId} index={index}>
      {(provided) => (
        <div
          className='taskBox'
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className='taskText'>{task.text}</p>
          {/* handleDeleteはクリックしたときだけ呼ばれたい */}
          <button className='taskTrashButton' onClick={() => handleDelete(task.id)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      )}
    </Draggable>
  )
}

export default Task
