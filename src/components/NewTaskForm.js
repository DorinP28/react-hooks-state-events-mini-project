import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const categoryList = categories.filter((category) => category !== "All");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState(categoryList[0]);

  function handleCreateTask(event) {
    event.preventDefault();

    const task = {
      text: details,
      category: category,
    };

    onTaskFormSubmit(task);
  }

  function handleDetailsChange(event) {
    setDetails(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  return (
    <form className="new-task-form" onSubmit={handleCreateTask}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetailsChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {categoryList.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
