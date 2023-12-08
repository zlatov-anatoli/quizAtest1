const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

let allCorrectAnswers = [];

app.post('/api/quiz-results', (req, res) => {
  try {
    const { correctAnswers } = req.body;
    console.log('Received correct answers:', correctAnswers);
    allCorrectAnswers = correctAnswers;
    res.json({ success: true, message: 'Received correct answers!' });
  } catch (error) {
    console.error('Error processing POST request:', error);
    res.status(500).json({ success: false, message: 'Error processing POST request', error: error.message });
  }
});

app.get('/api/stats', (req, res) => {
  try {
    const totalCorrectAnswers = allCorrectAnswers.length;
    res.json({ success: true, totalCorrectAnswers, allCorrectAnswers });
  } catch (error) {
    console.error('Error processing GET request:', error);
    res.status(500).json({ success: false, message: 'Error processing GET request', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
