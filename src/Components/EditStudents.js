import React, { useEffect,useRef,useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';

export default function EditStudents() {

const location = useLocation();
const id = location.state.id;



const getData=()=>{

    axios.get("https://aine-backend.onrender.com/students/" + id).then((res)=>{
        console.log(res.data)

        studentNameRef.current.value=res.data.studentName;
        studentAgeRef.current.value=res.data.studentAge;
        studentRollNumRef.current.value=res.data.rollNum;
        studentGradeRef.current.value=res.data.grade;
        setScholarship(res.data.scholarship);

    }).catch((e)=>{
        console.log(e);
    })
}

const [scholarship, setScholarship] = useState();

const studentNameRef = useRef();
const studentAgeRef = useRef();
const studentRollNumRef = useRef();
const studentGradeRef = useRef();



const handleScholarship =(e)=>{

  setScholarship(e.target.value);
}

useEffect(()=>{

    getData();
},[])

  return (
    <div>
      <h1>Edit Students</h1>
      <div className='bg-slate-100 w-[40%] h-[40%] rounded-sm pt-5 pb-5 pl-5 pr-5'>

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
      <input type="radio" name="scholarship" value={true} checked={scholarship? true : false} onChange={handleScholarship}/> Yes
      <br/>
      <input type="radio" name="scholarship" value={false} checked={!scholarship? true: false} onChangeCapture={handleScholarship}/> No
      <br/>
      <br/>
      </div>
    </div>
  )
}
