const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionText: String,
    options: [String],
    correctAnswer: Number // index of the correct answer
});

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    questions: [questionSchema]
});

module.exports = mongoose.model('Quiz', quizSchema);
