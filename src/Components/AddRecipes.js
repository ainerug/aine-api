import React from 'react'
import { useRef } from 'react'
import axios from 'axios';
import { NotificationContainer,NotificationManager } from 'react-notifications';
import { useNavigate } from 'react-router-dom';

export default function AddRecipes() {


    const recipeNameRef = useRef();
    const instructionsRef = useRef();
    const cookingTimeRef = useRef();
    const caloriesRef = useRef();
    const navigate = useNavigate();

    const addRecipe=()=>{

        const payload={

            "recipeName":recipeNameRef.current.value,
            "instructions":instructionsRef.current.value,
            "cookingTime":cookingTimeRef.current.value,
            "calories": caloriesRef.current.value,
        }

        axios.post("https://aine-backend.onrender.com/recipes", payload).then((res)=>{
            console.log("OK")
            NotificationManager.success("Recipe uploaded successfully!")
        }).catch((e)=>{
            console.log(e)
            NotificationManager.error("Something went wrong!")

        })
    }

    const goBack=()=>{
      navigate('/recipes')
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
    <div className='p-6 bg-gray-100 rounded-md w-[50%] mt-10'>
      


      <h1 className="text-[30px] font-bold mb-6">Recipes: </h1>

      <div>
        <NotificationContainer/>
        <input  type="text" placeholder='Recipe Name: ' ref={recipeNameRef} className="w-full p-3 mb-4 border border-gray-300 rounded"/>
        <br/>
        <br/>
        <textarea placeholder="Instructions..." ref={instructionsRef} className="w-full p-3 mb-4 border border-gray-300 rounded"/>
        <br/>
        <br/>
        <input type="text" placeholder='Cooking Time: ' ref={cookingTimeRef} className='w-full p-3 mb-4 border border-gray-300 rounded"'/>
        <br/>
        <br/>
        <input type="text" placeholder="Calories: "  ref={caloriesRef}className="w-full p-3 mb-4 border border-gray-300 rounded"/>
        <br/>
        <br/>
        <button className="w-[25%] bg-green-500 hover:bg-green-600 text-white text-[18px] p-3 rounded mr-3" onClick={addRecipe}>Add Recipe</button>
        <button className="w-[25%] bg-green-500 hover:bg-green-600 text-white text-[18px] p-3 rounded" onClick={goBack}>Back</button>
      </div>
    </div>
    </div>
  )
}
