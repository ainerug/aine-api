import Students from './Components/Students';
import AddStudents from './Components/AddStudents';
import Recipes from './Components/Recipes';
import Recipes1 from './Components/Recipes1';
import RecipesCopy from './Components/RecipesCopy';
import AddRecipes from './Components/AddRecipes';
import EditRecipes from './Components/EditRecipes';
import AddRecipesCopy from './Components/AddRecipesCopy';
import EditRecipesCopy from './Components/EditRecipesCopy';
import EditRecipes1 from './Components/EditRecipes1';
import AddRecipes1 from './Components/AddRecipes1';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditStudents from './Components/EditStudents';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/students' element={<><Students/></>}/>
      <Route path='/addstudents' element={<><AddStudents/></>}/>
      <Route path='/recipes' element={<><Recipes/></>}/>
      <Route path='/addrecipes' element={<><AddRecipes/></>}/>
      <Route path='/editstudents' element={<><EditStudents/></>}/>
      <Route path='/editrecipes' element={<><EditRecipes/></>}/>
      <Route path='/recipescopy' element={<><RecipesCopy/></>}/>
      <Route path='/editrecipescopy' element={<><EditRecipesCopy/></>}/>
      <Route path='/addrecipescopy' element={<><AddRecipesCopy/></>}/>
      <Route path='/recipes1' element={<><Recipes1/></>}/>
      <Route path='/editrecipes1' element={<><EditRecipes1/></>}/>
      <Route path='/addrecipes1' element={<><AddRecipes1/></>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
