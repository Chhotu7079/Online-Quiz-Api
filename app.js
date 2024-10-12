const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
connectDB();

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);

module.exports = app;
