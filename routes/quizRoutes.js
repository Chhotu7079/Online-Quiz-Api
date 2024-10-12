const express = require('express');
const {
    createQuiz,
    getAllQuizzes,
    getQuizById,
    submitQuiz
} = require('../controllers/quizController');
const { auth } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', auth, createQuiz);
router.get('/', auth, getAllQuizzes);
router.get('/:id', auth, getQuizById);
router.post('/:id/submit', auth, submitQuiz);

module.exports = router;
