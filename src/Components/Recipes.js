import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function Recipes() {
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();

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

  const editRecipe = (id) => {
    navigate("/editrecipes", { state: { id: id } });
  };

  const addNewRecipe = () => {
    navigate("/addrecipes");
  };

  const deleteRecipe = (id) => {
    axios
      .delete("https://aine-backend.onrender.com/recipes/" + id)
      .then((res) => {
        NotificationManager.success("Recipe has been deleted!");
      })
      .catch((e) => {
        NotificationManager.error("Something went wrong!");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <NotificationContainer />
      <div className="pt-6 pb-6 pr-3 pl-3 bg-gray-100 rounded-sm w-[40%]">
        <div className="flex justify-between">
          <h1 className="text-[30px] font-bold pr-3 pl-7">Recipes</h1>
          <button
            className="w-[140px]h-[20px] bg-green-500 hover:bg-green-600 text-white text-[16px] p-3 ml-7 mb-5 mr-5 rounded"
            onClick={addNewRecipe}
          >
            Add New Recipe
          </button>
        </div>

        {recipe.map((item) => {
          return (
            <div>
              <h2 className="text-[25px] font-semibold mb-6 mt-6 pl-7">
                {item.recipeName}
              </h2>
              <p className="bg-white p-5 ml-3 mr-3 ">
                <b>Instructions:</b> {item.instructions}
              </p>
              <p className="bg-white p-5 ml-3 mr-3">
                <b>Cooking time:</b> {item.cookingTime}
              </p>
              <p className="bg-white p-5 ml-3 mr-3 ">
                <b>Calories:</b> {item.calories} kcal
              </p>
              <button
                className="w-[140px]h-[20px] bg-green-500 hover:bg-green-600 text-white text-[16px] p-3 ml-7 mt-5 rounded mr-5"
                onClick={() => {
                  editRecipe(item._id);
                }}
              >
                Edit Recipe
              </button>
              <button
                className="w-[140px]h-[20px] bg-green-500 hover:bg-green-600 text-white text-[16px] p-3 rounded"
                onClick={() => {
                  deleteRecipe(item._id);
                }}
              >
                Delete Recipe
              </button>
              <hr className="mt-10 ml-3 mr-3 border-slate-200 border-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
