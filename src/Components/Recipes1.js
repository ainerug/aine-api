import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function Recipes1() {
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
    navigate("/editrecipes1", { state: { id: id } });
  };

  const deleteRecipe = (id) => {
    axios
      .delete("https://aine-backend.onrender.com/recipes/" + id)
      .then((res) => {
        console.log("ok");
        NotificationManager.success("Recipe has been deleted!");
      })
      .catch((e) => {
        console.log(e);
        NotificationManager.error("Something went wrong!");
      });
  };

  const addNewRecipe = () => {
    navigate("/addrecipes1");
  };
  return (
    <div className="bg-slate-200 flex flex-col justify-center items-center">
      <NotificationContainer />
      <div className=" flex justify-center items-center p-5 gap-10 w-full ">
      <div className=" w-[60%] justify-between flex ">
        <h1 className="font-semibold text-[25px]">Recipes </h1>
        <button
          className="bg-amber-500 hover:bg-amber-400 w-[140px] h-[6vh] rounded-md text-white font-semibold"
          onClick={addNewRecipe}
        >
          Add New Recipe
        </button>
      </div>
      </div>

      <div className="flex flex-col justify-center items-center ">
        {recipe.map((item) => {
          return (
            <div className="bg-slate-50 w-[60%] flex flex-col justify-center items-center p-5 mb-5 rounded-lg">
                <div>
              <h1 className="font-semibold text-[20px] pb-5 pt-4">{item.recipeName}</h1>
              <p> <b>Instructions: </b> {item.instructions}</p>
              <p className=" pb-3"> <b>Cooking Time: </b> {item.cookingTime}</p>
              <p className="pb-4"><b>Calories: </b> {item.calories}</p>
              <div>
                </div>
                <div className="flex justify-center">
                <button
                  className="bg-amber-500 hover:bg-amber-400 w-[140px] h-[6vh] rounded-md text-white font-semibold mr-5"
                  onClick={() => {
                    editRecipe(item._id);
                  }}
                >
                  Edit Recipe
                </button>
                <button
                  className="bg-amber-500 hover:bg-amber-400 w-[140px] h-[6vh] rounded-md text-white font-semibold"
                  onClick={() => {
                    deleteRecipe(item._id);
                  }}
                >
                  Delete Recipe
                </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
