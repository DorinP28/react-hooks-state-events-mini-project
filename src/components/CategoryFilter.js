import React from "react";

function CategoryFilter({ categories, setCategory, selectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button className={selectedCategory === category ? "selected" : ""} onClick={(e) => setCategory(e.target.value)} value={category} key={category}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
