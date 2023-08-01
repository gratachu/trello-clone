import React from 'react'

const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList
  }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    setTaskList([...taskList, {text: inputText}])
    setInputText('')
  }

  const handleCahnge = (e) => {
    setInputText(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='add a task'
          className='taskAddInput'
          onChange={handleCahnge}
          value={inputText}
        />
      </form>      
    </div>
  )
}

export default TaskAddInput
