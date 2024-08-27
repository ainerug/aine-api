import Students from './Components/Students';
import AddStudents from './Components/AddStudents';
import Recipes from './Components/Recipes';
import AddRecipes from './Components/AddRecipes';
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
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
