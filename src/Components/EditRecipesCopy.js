import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NotificationContainer,NotificationManager } from 'react-notifications';
import axios from 'axios';


export default function EditRecipesCopy() {

  const location=useLocation();
  const id =location.state.id;
  const navigate =useNavigate();

  const recipeNameRef= useRef();
  const instructionsRef = useRef();
  const cookingTimeRef = useRef();
  const caloriesRef = useRef();


  const getData=()=>{

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

  const editRecipes =()=>{

    const payload ={

      recipeName: recipeNameRef.current.value,
      instructions: instructionsRef.current.value,
      cookingTime: cookingTimeRef.current.value,
      calories: caloriesRef.current.value,

    };
    axios.patch("https://aine-backend.onrender.com/recipes/" + id, payload).then((res)=>{
      NotificationManager.success('Recipe has been edited!');
    }).catch((e)=>{
      NotificationManager.error('Something went wrong!');
    })
  }

  const goBack=()=>{

    navigate('/recipescopy')
  }

  return (
    <div className='w-full h-[90vh] p-8 flex justify-center items-center'>
      <NotificationContainer/>
        <div className='bg-slate-100 p-7  w-[70%] h-[75vh] rounded-md'>
          <h1 className='font-semibold text-[25px] text-center mb-6 '>Edit Recipe: </h1>
          <div className='flex justify-between pl-3 pr-3'><h1 className='font-semibold  text-[18px]'>Recipe Name:</h1>
          <input  className='w-[80%] p-3 mb-4 rounded-md'type="text" placeholder="Recipe Name..." ref={recipeNameRef}/></div>

          <div className='flex justify-between pl-3 pr-3'>
          <h1 className='font-semibold text-[18px]'>Instructions: </h1>
          <textarea className='w-[80%] h-[20vh] p-3 mb-4 rounded-md' placeholder="Instructions..." ref={instructionsRef}/> </div>

            <div className='flex justify-between pl-3 pr-3'>
            <h1 className='font-semibold text-[18px]'>Cooking Time: </h1>
          <input  className='w-[80%] p-3 mb-4 rounded-md'text="text" placeholder="Cooking Time..." ref={cookingTimeRef}/>
            </div>

            <div className='flex justify-between pl-3 pr-3 '>
            <h1 className='font-semibold text-[18px]'>Calories: </h1>
          <input className='w-[80%] p-3 mb-4 rounded-md' type="text" placeholder="Calories..." ref={caloriesRef}/>
            </div>
            <div className='flex justify-center gap-5 p-5 mt-5'>
            <button className='bg-lime-500 hover:bg-lime-400 w-[140px] h-[6vh] rounded-md' onClick={editRecipes}>Edit Recipe</button>
            <button className='bg-lime-500 hover:bg-lime-400 w-[140px] h-[6vh] rounded-md' onClick={goBack}>Back</button>
            </div>
         
        </div>
        </div>
      
 
  )
}
