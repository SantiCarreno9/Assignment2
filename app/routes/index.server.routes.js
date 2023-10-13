const express = require('express');
const studentRouter = express.Router();
const Student = require('../model/student.model');

studentRouter.route('/').get((req, res, next) =>
{
    Student.find().then(object => res.status(200).json(object))
        .catch(err => res.status(400).json({ "error": err }))
});

studentRouter.route('/:id').get((req, res, next) =>
{
    Student.findById(req.params.id).then(object => res.status(200).json(object))
        .catch(err => res.status(400).json({ "error": err }))
});

studentRouter.route('/add').post((req, res, next) =>
{
    let student = new Student(req.body)
    student.save()
        .then(object => res.status(200).json(object))
        .catch(err => res.status(400).json({ "error": err }))
});

studentRouter.route('/update/:id').post((req, res, next) =>
{
    Student.findById(req.params.id)
        .then(object =>
        {
            //Update the object with new data
            object.firstName = req.body.firstName;
            object.lastName = req.body.lastName;
            object.phone = req.body.phone;
            object.email = req.body.email;
            object.semester = req.body.semester;
            object.yearOfGraduation = req.body.yearOfGraduation;
            object.currentSubjects = req.body.currentSubjects;
            object.grades = req.body.grades;

            //Save new Data

            object.save()
                .then(object => res.status(200).json(object))
                .catch(err => res.status(400).json({ "error": err }))            
        })
        .catch(err => res.status(400).json({ "error": err }))
});

studentRouter.route('/delete/:id').delete((req, res, next) =>
{
    Student.findByIdAndDelete(req.params.id)
        .then(object => res.status(200).send("Registry deleted successfully"))
        .catch(err => res.status(400).json({ "error": err }))
});

module.exports = studentRouter;