import React, { useRef, useState } from "react";
import axios from "axios";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


export default function AddStudents(){

const [scholarship, setScholarship] = useState();

const studentNameRef = useRef();
const studentAgeRef = useRef();
const studentRollNumRef = useRef();
const studentGradeRef = useRef();


const handleScholarship = (e)=>{

    setScholarship(e.target.value);
}

const addStudents=()=>{

    const payload = {

        "studentName" : studentNameRef.current.value,
        "studentAge" : studentAgeRef.current.value,
        "rollNum" : studentRollNumRef.current.value,
        "grade" :studentGradeRef.current.value,
        "scholarship": scholarship,

    }

    axios.post("https://aine-backend.onrender.com/students", payload).then((res)=>{
        console.log("OK")
        NotificationManager.success("Student was added successfully!")
    }).catch((e)=>{

        console.log(e)
        NotificationManager.error("Something went wrong!")
    })
}

return(
    <div>
        <NotificationContainer/>
        <h1>Add a Student: </h1>
        <input type="text" placeholder="Student Name:" ref={studentNameRef}/>
        <br/>
        <br/>
        <input type="text" placeholder="Student Age:" ref={studentAgeRef}/>
        <br/>
        <br/>
        <input type="text" placeholder="Roll Number:" ref={studentRollNumRef}/>
        <br/>
        <br/>
        <input type="text" placeholder="Grade:" ref={studentGradeRef}/>
        <br/>
        <br/>
        <p>Scholarship applicable?</p>
        <input type="radio" name="scholarship"  value = {true} onChange={handleScholarship}/> Yes
        <br/>
        <input type="radio" name="scholarship" value = {false} onChange={handleScholarship}/> No
        <br/>
        <br/>
        <button onClick={addStudents}>Add Student</button>

    </div>
)

}


