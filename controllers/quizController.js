const Quiz = require('../models/Quiz');

// Create a Quiz
exports.createQuiz = async (req, res) => {
    try {
        const quiz = new Quiz(req.body);
        await quiz.save();
        res.status(201).json(quiz);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get All Quizzes
exports.getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get Quiz by ID
exports.getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
        res.json(quiz);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Submit Quiz and Get Result
exports.submitQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        const { answers } = req.body;
        let score = 0;
        quiz.questions.forEach((q, index) => {
            if (q.correctAnswer === answers[index]) score++;
        });
        res.json({ score, total: quiz.questions.length });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
