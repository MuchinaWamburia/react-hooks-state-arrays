import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() 
{
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    // console.log(newFood);
    const newFoodsArray = [...foods, newFood]
    setFoods(newFoodsArray)
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={()=>{removeFood(food.id)}}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function removeFood(id)
  {

     console.log(id)
      const newFoodArray = foods.filter((food) => food.id !== id);
      setFoods(newFoodArray);
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      {/* <div>
        {food.id}
      </div> */}
    </div>
  );
}

export default SpicyFoodList;