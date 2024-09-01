import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default function EditRecipes1() {

    const location = useLocation();
    const id = location.state.id;
    const navigate = useNavigate();

    const recipeNameRef = useRef();
    const instructionsRef = useRef();
    const cookingTimeRef = useRef();
    const caloriesRef = useRef();

    const getData = () => {

        axios.get("https://aine-backend.onrender.com/recipes/" + id).then((res)=>{
            console.log(res.data);
            recipeNameRef.current.value = res.data.recipeName;
            instructionsRef.current.value = res.data.instructions;
            cookingTimeRef.current.value = res.data.cookingTime;
            caloriesRef.current.value = res.data.calories; 


        }).catch((e)=>{
            console.log(e);
        })
    }

    useEffect(()=>{

        getData();
    }, [])

    const editRecipe = ()=>{

        const payload = {

            "recipeName": recipeNameRef.current.value,
            "instructions" : instructionsRef.current.value,
            "cookingTime" : cookingTimeRef.current.value,
            "calories" : caloriesRef.current.value,
        }
            axios.patch("https://aine-backend.onrender.com/recipes/" + id, payload).then((res)=>{
                console.log("ok");
                NotificationManager.success("Recipe has been edited!");
            }).catch((e)=>{
                NotificationManager.error("Something went wrong!");
            })
    }


    const goBack=()=>{

        navigate('/recipes1')
    }

  return (
    <div className=' w-full h-[90vh] flex flex-col justify-center items-center'>
      <NotificationContainer/>
      <div className='  w-[70%] h-[80vh] mt-10 p-10 rounded-lg  bg-slate-200'>
        <h1 className='text-center font-semibold text-[25px] mb-5 '>Recipes</h1>
        <div className='flex justify-between'>
            <h1 className='font-semibold text-[18px]'>Recipe Name: </h1>
            <input className='w-[80%] p-2 rounded-lg mb-5' type="text" placeholder="Recipe Name" ref={recipeNameRef}/>
        </div>

        <div className='flex justify-between'>
            <h1 className='font-semibold text-[18px]'>Instructions: </h1>
            <textarea className='w-[80%] h-[20vh]  p-2 rounded-lg mb-5' placeholder="instructions" ref={instructionsRef}/>
        </div>

        <div className='flex justify-between'>
            <h1 className='font-semibold text-[18px]'>Cooking Time: </h1>
            <input className='w-[80%] p-2 rounded-lg mb-5' type="text" placeholder="cooking time" ref={cookingTimeRef}/>
        </div>

        <div className='flex justify-between'>
            <h1 className='font-semibold text-[18px]'>Calories: </h1>
            <input  className='w-[80%] p-2 rounded-lg mb-5' type="text" placeholder="calories" ref={caloriesRef}/>
        </div>
        <div className='flex justify-center gap-10 mt-5' >
      <button className='bg-amber-500  hover:bg-amber-400 w-[140px] h-[6vh] rounded-lg text-white font-semibold' onClick={editRecipe}>Edit Recipe</button>
      <button  className='bg-amber-500  hover:bg-amber-400 w-[140px] h-[6vh] rounded-lg text-white font-semibold'onClick={goBack}>Back</button>
      </div>

      </div>
     
        
        

    </div>
  )
}
