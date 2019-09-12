const express = require('express');
const router = express.Router();
const student_controller = require('../controllers/student.controller');

router.get('/student/:id', student_controller.student_read);
router.get('/student', student_controller.student_readAll);
router.post('/student', student_controller.student_create);

module.exports = router;