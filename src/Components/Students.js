import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

export default function Students() {


  const [student, setStudent] = useState([]);
  
  const getData=()=>{

    axios.get("https://aine-backend.onrender.com/students")
    .then((res)=>{
      console.log(res.data);
      setStudent(res.data);
    })
    .catch((e)=>{
      console.log(e);
    })

  }
  useEffect(()=>{

    getData();
  },[])
  return (
    <div>
      <div>
        <h1>Students</h1>

        {student.map((item)=>{

          return(
            <div>
              <h1>{item.studentName}</h1>
              <p>Age: {item.studentAge}</p>
              <p>Roll: {item.rollNum}</p>
              <p>Grade: {item.grade}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
