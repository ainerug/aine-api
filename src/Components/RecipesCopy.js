import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function RecipesCopy() {
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
    navigate("/editrecipescopy", { state: { id: id } });
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

  const addNewRecipe = () => {
    navigate("/addrecipescopy");
  };

  return (
    <div className="flex justify-center items-center w-full]  bg-slate-100">
      <NotificationContainer />
      <div className="flex flex-col w-[80%] bg-slate-100 items-center rounded-md ">
        <div className="flex justify-between w-[60%] pl-5 pr-5 mb-5 bg-white rounded-md">
          <h1 className="font-semibold text-[25px] pt-6 ">Recipes</h1>
          <button
            className="bg-lime-500 hover:bg-lime-400 w-[140px] h-[6vh] rounded-md mt-6 mb-5 pl-3 pr-3 text-[15px]"
            onClick={addNewRecipe}
          >
            Add New Recipe
          </button>
        </div>
        {recipe.map((item) => {
          return (
            <div className="p-5 mb-5 mt-3 bg-white w-[60%]  rounded-md ">
              <h1 className="font-semibold text-[20px] pb-4 text-center">{item.recipeName}</h1>
              <p className="pb-4">
               
                <b>Instructions:</b> {item.instructions}
              </p>
              <p className="pb-4">
               
                <b>Cooking Time:</b> {item.cookingTime}
              </p>
              <p>
              
                <b>Calories:</b> {item.calories}
              </p>
              <br />
              <div className="flex justify-center">
              <button
                className="bg-lime-500 hover:bg-lime-400 w-[140px] h-[6vh] rounded-md mr-5"
                onClick={() => {
                  editRecipe(item._id);
                }}
              >
                Edit Recipe
              </button>
              <button
                className="bg-lime-500 hover:bg-lime-400 w-[140px] h-[6vh] rounded-md"
                onClick={() => {
                  deleteRecipe(item._id);
                }}
              >
                Delete Recipe
              </button>
              </div>
            
            </div>
          );
        })}
      </div>
    </div>
  );
}
