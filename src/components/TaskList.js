//First, display all the tasks in our app.  
  //Pass down the task data from App to TaskList, -> DONE
  //display each task using the Task component. Make sure to use a key prop!

  //best practice to build map out final return (make variable and render at the end)

import React from "react";
import Task from "./Task";

function TaskList({tasks, setTasks}) {
  const allTasks = tasks.map((task) => {
    return(
      <Task key={task.text} setTasks={setTasks} task={task} tasks={tasks}/>
    )
  })
  return ( 
    <div className="tasks">
      {
        allTasks 
      }
    </div>
  );
}

export default TaskList;
