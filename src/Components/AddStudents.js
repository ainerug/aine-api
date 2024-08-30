import React from 'react'
import axios from 'axios'
import { useState,useRef } from 'react'
import 'react-notifications/lib/notifications.css'
import { NotificationContainer,NotificationManager } from 'react-notifications'
import { useNavigate } from 'react-router-dom'

export default function AddStudents() {

  const [scholarship, setScholarship] = useState();
  const navigate = useNavigate();

  const studentNameRef = useRef();
  const studentAgeRef = useRef();
  const studentRollNumRef = useRef();
  const studentGradeRef = useRef();


  const handleScholarship =(e)=>{

    setScholarship(e.target.value);
  }


  const addStudent = ()=>{

    const payload = {

      "studentName": studentNameRef.current.value,
      "studentAge": studentAgeRef.current.value,
      "rollNum" : studentRollNumRef.current.value,
      "grade": studentGradeRef.current.value,
      scholarship: scholarship,


    }

    axios.post("https://aine-backend.onrender.com/students", payload).then(()=>{
      console.log("OK");
      NotificationManager.success("Student was added sucessfully!");

    }).catch((e)=>{

      console.log(e);
      NotificationManager.error("Something went wrong!");

    })
    
  }
   const goBack=()=>{
    navigate('/students');
   }




  return (
    <div>
      <NotificationContainer/>
      <div className='bg-slate-100 w-[40%] h-[40%] rounded-sm pt-5 pb-5 pl-5 pr-5'>
      <h1 className='pb-5 font-semibold text-[20px]'>Add a Student: </h1>

      <input  className="w-full"type="text" placeholder="Student's Name: " ref={studentNameRef}/>
      <br/>
      <br/>
      <input  className="w-full"type="text" placeholder="Student's Age: " ref={studentAgeRef}/>
      <br/>
      <br/>
      <input  className="w-full "type="text" placeholder="Roll Number: " ref={studentRollNumRef}/>
      <br/>
      <br/>
      <input  className="w-full"type="text" placeholder="Grade: " ref={studentGradeRef}/>
      <br/>
      <br/>
      <h2>Applicable for Scholarship?: </h2>
      <br/>
      <input type="radio" name="scholarship" value={true} onChange={handleScholarship}/> Yes
      <br/>
      <input type="radio" name="scholarship" value={false} onChangeCapture={handleScholarship}/> No
      <br/>
      <br/>
      <button  className="w-[130px] h-[30px] rounded-sm bg-green-400 ml-2 mr-2"onClick={addStudent}>Add Student</button>
      <button  className="w-[130px] h-[30px] rounded-sm bg-green-400"onClick={goBack}>Back</button>
      </div>
    </div>
  )
}

