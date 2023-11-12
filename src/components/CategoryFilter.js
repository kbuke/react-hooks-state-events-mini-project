// Pass the list of categories to this component from App. -DONE
//Then, update this component to display <button> elements for each category. 
//In order to pass the test, the buttons will need a key prop equal to the category.

// When a button is clicked, the following should happen:
  // Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
  // The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
  // If the button for "All" is selected, all the tasks should be displayed.


import React, { useState } from "react";

function CategoryFilter({categories, selectedCategory, setCategory}) {
  const allCategories = categories.map((category) => {
    const isClicked = selectedCategory===category? "selected" : ""
    return(
      <button key={category} className={isClicked} onClick={() => setCategory(category)}>{category}</button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        allCategories
      }
    </div>
  );
}

export default CategoryFilter;
