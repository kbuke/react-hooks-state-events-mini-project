//Pass the list of categories to this component from App. 
//Then, update this component to display <option> elements for each category inside of the <select> element except the "All" category, 
//so the user can select a category when adding a new task.

// Next, update this form to be a controlled component, so that all form inputs are captured in state.

// When the form is submitted, add a new task to the list with the text and category from the form. For the tests for this feature to pass, you'll need a callback prop named onTaskFormSubmit that takes a task object as an argument.


import React, { useState } from "react";

function NewTaskForm({categories, selectedCategory, tasks, setTasks, onTaskFormSubmit}) {
  const[newDetail, setNewDetail] = useState("")
  const[newCategory, setNewCategory] = useState("Code")
  const[submittedData, setSubmittedData] = useState("")

  function handleNewDetail(event){
    setNewDetail(event.target.value)
  }

  function handleNewCategory(event){
    setNewCategory(event.target.value)
  }

  const allCategories = categories.map(category => {
    return(
      <option key={category}>{category}</option>
    )
  })

  const neededCategories = allCategories.slice(1)

  function handleSubmit(event){
    event.preventDefault()
    const formData = {
      text: newDetail,
      category: newCategory
    }
    onTaskFormSubmit(formData)
    setNewDetail("")
    setNewCategory("Code")
  }

  

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNewDetail} value={newDetail} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewCategory} value={newCategory}>
          {neededCategories}
        </select>
      </label>
      <input type="submit" value="Add task"  />
    </form>
  );
}

export default NewTaskForm;
