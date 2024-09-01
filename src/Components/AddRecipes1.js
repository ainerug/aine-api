import React, {  useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';

export default function AddRecipes1() {


    
    const navigate = useNavigate();
   
    
    const recipeNameRef = useRef();
    const instructionsRef = useRef();
    const cookingTimeRef = useRef();
    const caloriesRef = useRef();


    const addNewRecipe=()=>{

        const payload = {

            "recipeName": recipeNameRef.current.value,
            "instructions": instructionsRef.current.value,
            "cookingTime" : cookingTimeRef.current.value,
            "calories" : caloriesRef.current.value,
        }
        
        axios.post("https://aine-backend.onrender.com/recipes", payload).then((res)=>{
            console.log("ok");
            NotificationManager.success("Recipe has been added!");

        }).catch((e)=>{
            NotificationManager.error("Something went wrong!");
        })
    }

    const goBack=()=>{
        navigate('/recipes1')
    }


  return (
    <div className=' flex flex-col  justify-center items-center'>
      <NotificationContainer/>
      <div className='bg-slate-200 w-[60%] h-[75vh] p-5 mt-10 rounded-lg'>
      <h1 className='font-semibold text-[25px] text-center mb-5 mt-5'>Add New Recipe: </h1>
      <div className='flex flex-col justify-center items-center'>
      <input  className="w-[80%] p-2 rounded-lg text-[18px] "type="text" placeholder="Recipe Name..." ref={recipeNameRef}/>
      <br/>
      <textarea   className="w-[80%] p-2 rounded-lg h-[20vh] text-[18px] " placeholder='Instructions...' ref={instructionsRef}/>
      <br/>
      <input  className="w-[80%] p-2 rounded-lg text-[18px] " type="text" placeholder="Cooking Time..." ref={cookingTimeRef}/>
      <br/>
      <input className="w-[80%] p-2 rounded-lg text-[18px]  mb-10" type="text" placeholder="Calories..." ref={caloriesRef}/>
      <div className='flex justify-center gap-5'>
      <button className='bg-amber-500 hover:bg-amber-400 w-[140px] h-[6vh] rounded-md text-white font-semibold' onClick={addNewRecipe}>Add New Recipe</button>
      <button  className='bg-amber-500 hover:bg-amber-400 w-[140px] h-[6vh] rounded-md text-white font-semibold'onClick={goBack}>Back</button>
      </div>
      </div>
    </div>
    </div>
  )
}
