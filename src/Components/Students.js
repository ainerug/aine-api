import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NotificationContainer, NotificationManager } from "react-notifications";

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

  const editStudent=(id)=>{
    navigate('/editstudents', {state:{id:id}})
  }

  const deleteStudent =(id)=>{
    axios.delete("https://aine-backend.onrender.com/students/" + id).then(()=>{
      NotificationManager.success("Student deleted!")
    }).catch((e)=>{
      NotificationManager.error("Something went wrong!")
    })

  }

  const addNewStudent =()=>{

    navigate('/addstudents');
  }
  useEffect(()=>{

    getData();
  },[])

  return (
    <div className="pt-5">
      <NotificationContainer/>
      <button  className="w-[140px] h-[30px] rounded-sm bg-green-400" onClick={addNewStudent}>Add New Student</button>
      <h1 className="font-semibold pt-5 pb-5 text-[20px]">Students:</h1>
      <div>
        {student.map((item)=>{

          return(
            <div className="bg-slate-100 w-[40%] h-[40%] rounded-sm pt-5 pb-5 pl-5 pr-5">
              <h1 className="font-semibold">{item.studentName}</h1>
              <p>Age: {item.studentAge}</p>
              <p>Roll Number: {item.rollNum}</p>
              <p>Grade: {item.grade}</p>
              <button className="w-[130px] h-[30px] rounded-sm bg-green-400 mr-5 "onClick={()=>{editStudent(item._id)}}>Edit Student</button>
              <button className="w-[130px] h-[30px] rounded-sm bg-green-400"onClick={()=>{deleteStudent(item._id)}}>Delete Student</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}
