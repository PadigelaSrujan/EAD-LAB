const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});
let students=[
    { id: 1, name: 'Alice', age: 20 },
    { id: 2, name: 'Bob', age: 22 },];
app.get('/students',(req,res)=>{
    res.json(students);
});
app.post('/students',(req,res)=>{
    const { name, age } = req.body;
    if(!name || !age){
        return res.status(400).json({ message: 'Name and age are required' });
    }
    const newStudent = {
        id: students.length + 1,
        name: name,
        age: age
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});
app.put('/students/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const { name, age } = req.body;
    const student = students.find(s => s.id === id);
    if(student){
        student.name = name;
        student.age = age;
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});
app.delete('/students/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if(student){
        students = students.filter(s => s.id !== id);
        res.json({ message: 'Student deleted' });
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
