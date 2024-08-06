const express = require("express");
const cors = require("cors");
const Student = require("./Model/Students");
require("./DB/Conn");

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/students", async (req, res)=>{
    try {
        const students = await Student.find();
        res.status(200).send(students);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.post("/students", (req, res)=>{
    try {
        const addStudent = new Student(req.body);
        addStudent.save().then(()=>{
            res.status(200).send(addStudent);
        }).catch((error)=>{
        res.status(404).send(error);
        })
    } catch (error) {
        res.status(404).send(error);
    }
})

app.listen(PORT, ()=> {
    console.log("APi is running on PORT: "+PORT);
})