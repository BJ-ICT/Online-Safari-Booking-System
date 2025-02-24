const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Connect to MongoDB (replace <your_mongodb_uri> with your actual connection string)
mongoose.connect('mongodb+srv://safari:1234@junglejourney.6ychc.mongodb.net/?retryWrites=true&w=majority&appName=JungleJourney',)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from your online safari booking system!');
});

// Set your port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
