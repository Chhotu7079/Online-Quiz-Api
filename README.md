Creating a RESTful API for a basic online quiz application using Node.js and Express.js involves setting up several endpoints for user authentication and quiz management.
Here’s a high-level overview of the project and the steps you can follow:


#Initialize a New Project:


 #mkdir online-quiz-api
 
 #cd online-quiz-api
 
 #npm init -y


#Install Dependencies:

express: Web framework for building the API.

mongoose: MongoDB ODM for defining schemas and interacting with the database.

bcryptjs: For password hashing.

jsonwebtoken: For handling authentication tokens.

body-parser: Middleware for parsing incoming request bodies.


#Folder Structure:


online-quiz-api/

├── config/

│   └── db.js

├── controllers/

│   ├── authController.js

│   └── quizController.js

├── models/

│   ├── User.js

│   └── Quiz.js

├── routes/

│   ├── authRoutes.js

│   └── quizRoutes.js

├── middleware/

│   └── authMiddleware.js

├── app.js

└── server.js


#After implementing all these files, you can start the server with:
node server.js


#API
->User Authentication

*POST /api/auth/register: Register a new user.

*POST /api/auth/login: Log in and receive a JWT.

->Quiz Management

*POST /api/quiz/create: Create a new quiz.

*GET /api/quiz/: Retrieve all quizzes.

*GET /api/quiz/:id: Retrieve details for a specific quiz.

*POST /api/quiz/:id/submit: Submit answers and get the score for a quiz.



#Example:


#server : http://localhost:5000

1. Register a User :
  Endpoint: POST /api/auth/register
{
  "name": "abce",
  "email": "abc@gmail.com",
  "password": "123"
}


2. Login
Endpoint: POST /api/auth/login
{
  "email": "abc@gmail.com",
  "password": "123"
}


3. Create a Quiz (Authenticated Request)
Endpoint: POST /api/quiz/create


headers:
{
  "Authorization": "Bearer your_jwt_token_here"
}


Request Body
{
  "title": "Basic Quiz",
  "questions": [
    {
      "questionText": "2 + 2 = ? ",
      "options": ["3", "4", "5", "6"],
      "correctAnswer": 1
    },
    {
      "questionText": "10 - 7 = ?",
      "options": ["1", "2", "3", "4"],
      "correctAnswer": 2
    }
  ]
}


4. Taking the Quiz and Submitting Answers (Authenticated Request)
   Endpoint: POST /api/quiz/:id/submit
   headers :
{
  "Authorization": "Bearer your_jwt_token_here"
}


Request body:
{
  "answers": [1, 2]
}


##Here, answers is an array where each item represents the selected answer for each question. 
The indices in the answers array correspond to the order of questions. 
So, the answer 1 for the first question (2 + 2 = 4) is correct, and 2 for the second question (10 - 7 = 3) is also correct.


####
####This example demonstrates the main functionalities: user registration, login, creating a quiz, and submitting quiz answers.
