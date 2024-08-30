import React, { useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function EditRecipes() {


  const location = useLocation();
  const id = location.state.id;
  const navigate = useNavigate();

  const recipeNameRef = useRef();
  const instructionsRef = useRef();
  const cookingTimeRef = useRef();
  const caloriesRef = useRef();

  const getData = () => {
    axios
      .get("https://aine-backend.onrender.com/recipes/" + id)
      .then((res) => {
        console.log(res.data);
        recipeNameRef.current.value = res.data.recipeName;
        instructionsRef.current.value = res.data.instructions;
        cookingTimeRef.current.value = res.data.cookingTime;
        caloriesRef.current.value = res.data.calories;
    
      })
      .catch((e) => {
        console.log(e);
       
      });
  };

  useEffect(() => {
    getData();
  },[]);

  const editRecipes = () => {
    const payload = {
      recipeName: recipeNameRef.current.value,
      instructons: instructionsRef.current.value,
      cookingTime: cookingTimeRef.current.value,
      calories: caloriesRef.current.value,
    };

    axios
      .patch("https://aine-backend.onrender.com/recipes/" + id, payload)
      .then((res) => {
        NotificationManager.success("Recipe has been edited successfully!");
      })
      .catch((e) => {
        NotificationManager.error("Something went wrong!");
      });
  };

  const goBack = () => {
    navigate("/recipes");
  };

  return (

  
       
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
    <div className="p-6 bg-gray-100 rounded-md w-[50%] mt-10 ">
      <NotificationContainer />
      <h1 className="font-semibold text-[25px]">Edit Recipes </h1>
      <div className="flex justify-start">
        {" "}
        <h1 className="pt-8 mr-5">Recipe Name: </h1>{" "}
        <input
          className="mt-4 mb-4 w-[80%] p-3"
          type="text"
          placeholder="Recipe Name..."
          ref={recipeNameRef}
        />{" "}
      </div>

      <br />
      <div className="flex justify-start">
        {" "}
        <h1 className="pt-8 mr-7">Instructions: </h1>
        <textarea
          className="mt-4 mb-4 w-[80%] h-[20vh] p-3"
          placeholder="Instructions..."
          ref={instructionsRef}
        />
      </div>

      <br />
      <div className="flex justify-start">
        {" "}
        <h1 className="pt-7 mr-3">Cooking Time: </h1>
        <input
          className="mt-4 mb-4 p-3 w-[80%]"
          type="text"
          placeholder="Cooking Time..."
          ref={cookingTimeRef}
        />
      </div>

      <br />
      <div className="flex justify-start">
        {" "}
        <h1 className="pt-7 mr-14">Calories: </h1>
        <input
          className="mt-4 mb-4 p-3 w-[80%]  "
          type="text"
          placeholder="Calories..."
          ref={caloriesRef}
        />
      </div>

      <br />
      <button
        className=" bg-green-500 hover:bg-green-600 text-white mr-4 h-[5vh] w-[120px] pt-2 pb-2 pl-2 pr-2 rounded-md"
        onClick={editRecipes}
      >
        Edit Recipe
      </button>
      <button
        className=" bg-green-500 hover:bg-green-600 text-white h-[5vh] w-[120px] p-2 rounded-md"
        onClick={goBack}
      >
        Back
      </button>
    </div>
    </div>
  ) 
 }
  

