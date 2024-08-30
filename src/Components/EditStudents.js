
import React, { useEffect,useRef,useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default function EditStudents() {

  const navigate = useNavigate();

 const [scholarship, setScholarship] = useState();
 const location = useLocation();
 const id=location.state.id;

 const studentNameRef = useRef();
 const studentAgeRef = useRef();
 const studentRollNumRef = useRef();
 const studentGradeRef = useRef();



 const getData=()=>{

  axios.get("https://aine-backend.onrender.com/students/" + id).then((res)=>{
    console.log(res.data);
    studentNameRef.current.value = res.data.studentName;
    studentAgeRef.current.value = res.data.studentAge;
    studentRollNumRef.current.value = res.data.rollNum;
    studentGradeRef.current.value = res.data.grade;
    setScholarship(res.data.scholarship);
  }).catch((e)=>{
    console.log(e);
  })
 }


 const handleScholarship=(e)=>{
  setScholarship(e.target.value);

 }
 useEffect(()=>{

  getData();
 },[])


 const editStudent =()=>{

  const payload={

    "studentName": studentNameRef.current.value,
    "studentAge": studentAgeRef.current.value,
    "rollNum" : studentRollNumRef.current.value,
    "grade": studentGradeRef.current.value,
    scholarship: scholarship,
  }

  axios.patch("https://aine-backend.onrender.com/students/" + id, payload).then(()=>{
    NotificationManager.success("Student edited!");
  }).catch((e)=>{
    NotificationManager.error("Something went wrong!")
  })
 }

 const goBack=()=>{

  navigate('/students');
 }
  
  return (
    <div>
      <NotificationContainer/>
      <div className='bg-slate-100 w-[40%] h-[40%] rounded-sm pt-5 pb-5 pl-5 pr-5'>
      <h1 className='font-semibold pb-4'>Edit Students:</h1>

      <input  className="w-full"type="text" placeholder="Student's Name: " ref={studentNameRef} />
      <br/>
      <br/>
      <input  className="w-full"type="text" placeholder="Student's Age: " ref={studentAgeRef} />
      <br/>
      <br/>
      <input  className="w-full "type="text" placeholder="Roll Number: " ref={studentRollNumRef} />
      <br/>
      <br/>
      <input  className="w-full"type="text" placeholder="Grade: " ref={studentGradeRef} />
      <br/>
      <br/>
      <h2>Applicable for Scholarship?: </h2>
      <br/>
      <input type="radio" name="scholarship" value={true}  checked={scholarship? true: false } onClick={handleScholarship}/> Yes
      <br/>
      <input type="radio" name="scholarship" value={false} checked={!scholarship? true: false} onClick={handleScholarship}/> No
      <br/>
      <br/>
      <button className="w-[130px] h-[30px] rounded-sm bg-green-400 ml-2 mr-2"onClick={editStudent}>Edit Student</button>
      <button className="w-[130px] h-[30px] rounded-sm bg-green-400" onClick={goBack}>Back</button>
      </div>
    </div>
  )
}