import Students from './Components/Students';
import AddStudents from './Components/AddStudents';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/students' element={<><Students/></>}/>
      <Route path='/addstudents' element={<><AddStudents/></>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
