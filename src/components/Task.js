import React from "react";

function Task({setTasks, task, tasks}) {
  function handleDelete() {
    const removedTask = tasks.filter(selectedTask => {
      return (selectedTask.text !== task.text)
    })
    setTasks(removedTask)
  }
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
