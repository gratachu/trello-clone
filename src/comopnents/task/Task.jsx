import React from 'react'

const Task = ({task, taskList, setTaskList}) => {
  const handleDelete = (id) => {
    // setTaskListでtaskListを更新する
    // taskListの中からクリックしたidとtaskのidが一致するものを除外した配列をsetTaskListに渡す

    setTaskList(taskList.filter((task) => task.id !== id))
  }

  return (
    <div className='taskBox'>
      <p className='taskText'>{task.text}</p>
      {/* handleDeleteはクリックしたときだけ呼ばれたい */}
      <button className='taskTrashButton' onClick={() => handleDelete(task.id)}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  )
}

export default Task
