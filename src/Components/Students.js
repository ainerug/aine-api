import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Students() {
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();


  
  const getData = () => {
    axios
      .get("https://aine-backend.onrender.com/students")
      .then((res) => {
        console.log(res.data);
        setStudent(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(()=>{

    getData();
  },[])

  const editStudents =(id)=>{
      navigate('/editstudents', {state:{id:id}});

  }

  return <div>

    <h1>Students: </h1>
    <div>

      {student.map((item)=>{

        return(
          <div>
              <h1>{item.studentName}</h1>
              <p>Age: {item.studentAge}</p>
              <p>Roll Number: {item.rollNum}</p>
              <p>Grade: {item.grade}</p>
              <button onClick={()=>editStudents(item._id)}>Edit Student</button>
              <button>Delete Student</button>
            

          </div>
        )
      })}
    </div>
  </div>;
}
