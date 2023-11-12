import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[tasks, setTasks] = useState(TASKS)
  const[category, setCategory] = useState("All")

  function onTaskFormSubmit(formData){
    const dataArray = [...tasks, formData]
    setTasks(dataArray)
  }

  const filterTasks = tasks.filter(task =>  {
    if(category === "All"){
      return task
    } 
    if(task.category === category){
      return task
    }
  })



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} setCategory={setCategory} tasks={tasks}/>
      <NewTaskForm categories={CATEGORIES} selectedCategory={category} setTasks={setTasks} tasks={tasks} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filterTasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
