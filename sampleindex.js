const express = require("express");
const port = 3000;

const students = [
    { id: nextId++, name: "Alice", course: "BSCS"},
    {id: nextId++, name: "Bob", course: "BSIT"},
    {id: nextId++, name: "Cara", course: "BSCS"}
];

const app = express();

app.use(express.json());

app.post('/students', (req, res) => {
    const newName = req.body.name
    const newCourse = req.body.course
    
    const newStudent = { id: nextID++, name: newName, course: newCourse}

    students.push(newStudent)

    res.send(newStudent)
});

app.get('/students', (req, res) => {
    res.status(200).json(students);
});

app.put('/students/id:', (req, res) => {
    const studentId = parseInt(req.params.id);
    const name = req.body.name
    const course = req.body.course
    const index = students.findIndex( s => s.id === studentId)

    if( index !== -1){
        students[index] = {id: studentId, name, course }
        res.status(200).json(students[index]);
    } else {
        res.status(404).json({ message: "student not found"})
    }
});

app.patch('/students', (req, res) => {
    
});

app.delete('/students', (req, res) => {

});

app.listen(3000, () => {
    console.log("App is listening to port 3000");
});