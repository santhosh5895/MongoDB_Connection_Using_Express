const Student = require('../models/student.model');

exports.student_readAll = function(req, res) {
    Student.find((err,students)=>{
        if(err){
            res.send(err);
            return err;
        }
        res.send(students);
    })
};

exports.student_create = (req, res) =>{
    let student = new Student(
       {
            fName: req.body.fName,
            lName: req.body.lName,
            DOB: req.body.DOB,
            rollNo: req.body.rollNo
       }
    );

    student.save((err,student)=>{
        if(err){
            return next(err);
        }
        res.send(student);
    })
};

exports.student_read = function(req, res) {
    Student.findById(req.params.id,(err,student)=>{
        if(err){
            res.send(err);
            return err;
        }
        res.send(student)
    })
};