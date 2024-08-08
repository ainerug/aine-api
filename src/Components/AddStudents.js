import React from "react";

export default function AddStudents(){




return(
    <div>

        <h1>Add a Student: </h1>
        <input type="text" placeholder="Student Name: "/>
        <br/>
        <br/>
        <input type="text" placeholder="Student Age:"/>
        <br/>
        <br/>
        <input type="text" placeholder="Roll Number:"/>
        <br/>
        <br/>
        <input type="text" placeholder="Grade:"/>
        <br/>
        <br/>
        <p>Scholarship applicable?</p>
        <input type="radio" name="scholarship"/> Yes
        <br/>
        <input type="radio" name="scholarship"/> No
        <br/>
        <br/>
        <button>Add Student</button>

    </div>
)

}


