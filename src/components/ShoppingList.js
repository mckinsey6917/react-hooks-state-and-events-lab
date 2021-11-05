import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
//create function
  function handleCategory(e) {
    // e.target.value will be the value selected by the user
    setSelectedCategory(e.target.value);
  }
  //now filter to display ONLY SELECTED ITEMS
  const itemsDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

//{items.map((item) => ) UPDATED WITH CONST SELECTED ITEMS
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">

        {itemsDisplay.map((item) => (

//{items.map((item) => ) UPDATED WITH CONST SELECTED ITEMS
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
