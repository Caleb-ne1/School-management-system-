const express = require("express");
const router = express.Router();

const Student = require("../models/students")

router.post('/add-student', async (req, res) => {
    const { first_name, last_name, email, course, reg_no } = req.body;

    try {
        const newStudent = new Student({ first_name, last_name, email, course, reg_no });
        await newStudent.save();
        res.status(200).json({ message: 'Student added', name: `${first_name} ${last_name}` });
    } catch (error) {
        res.status(500).json({ message: 'Error adding student', error: error.message });
    }
});

router.get('/all-students', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students', error: error.message });
    }
});

module.exports = router;
