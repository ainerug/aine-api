import React from "react";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function AddRecipesCopy() {
  const recipeNameRef = useRef();
  const instructionsRef = useRef();
  const cookingTimeRef = useRef();
  const caloriesRef = useRef();
  const navigate = useNavigate();

  const addRecipe = () => {
    const payload = {
      recipeName: recipeNameRef.current.value,
      instructions: instructionsRef.current.value,
      cookingTime: cookingTimeRef.current.value,
      calories: caloriesRef.current.value,
    };

    axios
      .post("https://aine-backend.onrender.com/recipes", payload)
      .then((res) => {
        console.log("OK");
        NotificationManager.success("Recipe has been added!");
      })
      .catch((e) => {
        console.log(e);
        NotificationManager.error("Something went wrong!");
      });
  };

  const goBack = () => {
    navigate("/recipescopy");
  };

  return (
    <div>
      <NotificationContainer />
      <div className="flex justify-center items-center w-full h-full p-5">
        <div className="mt-5 w-[70%] h-full p-8 rounded-md bg-slate-100  flex flex-col justify-center items-center">
          <h1 className="font-semibold text-[25px] text-center  mb-5">
            Add New Recipe:
          </h1>

          <input
            className="w-[80%] h-[5vh] pl-3 rounded-md"
            type="text"
            placeholder="Recipe Name..."
            ref={recipeNameRef}
          />

          <br />

          <textarea
            className="w-[80%] h-[20vh] pl-3 pt-2 rounded-md"
            placeholder="Instructions..."
            ref={instructionsRef}
          />

          <br />

          <input
            className="w-[80%] h-[5vh] pl-3 rounded-md"
            type="text"
            placeholder="Cooking Time..."
            ref={cookingTimeRef}
          />
          <br />

          <input
            className="w-[80%] h-[5vh] pl-3 rounded-md"
            type="text"
            placeholder="Calories..."
            ref={caloriesRef}
          />

          <br />
          <div className="flex justify-center">
            <button
              className="bg-lime-500 hover:bg-lime-400 w-[140px] h-[6vh] mr-5 rounded-md"
              onClick={addRecipe}
            >
              Add New Recipe
            </button>
            <button
              className="bg-lime-500 hover:bg-lime-400 w-[140px] h-[6vh] rounded-md"
              onClick={goBack}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
