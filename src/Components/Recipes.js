import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Recipes() {
  const [recipe, setRecipe] = useState([]);

  const getData = () => {
    axios
      .get("https://aine-backend.onrender.com/recipes")
      .then((res) => {
        console.log(res.data);
        setRecipe(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-[30px] font-bold pr-3 pl-3">Recipes</h1>
        {recipe.map((item) => {
          return (
            <div className="pt-6 pb-6 pr-3 pl-3 bg-gray-100 rounded-sm w-[40%]">
              <h2 className="text-[25px] font-semibold mb-6">
                {item.recipeName}
              </h2>
              <p className="bg-white pr-3  ">
                <b>Instructions:</b> {item.instructions}
              </p>
              <p className="bg-white pr-3 ">
                <b>Cooking time:</b> {item.cookingTime}
              </p>
              <p className="bg-white pr-3 ">
                <b>Calories:</b> {item.calories} kcal
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
