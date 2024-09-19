const Student = require('../models/Student');
async function addStudent(req,res){
    try{
        console.log(req.body,'req.body');
        let student = new Student(req.body);
        await student.save();//save return promise
        console.log("data saved sucessfully");
        res.end("Data added");
    } catch(err) {
        console.log(err)
    }
}
const getStudents = async function(req,res){
    try{
        let students = await Student.find({});//select * from table_name
        console.log(students);
        res.send(students);
    } catch(err){
        console.log(err)
    }
}
module.exports={
    addStudent,
    getStudents
}