const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

// Replace the following with your MongoDB connection string
const mongoDB = 'mongodb://localhost:27017/amenitiesDB';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.use(express.json());

// Define a schema
const Schema = mongoose.Schema;
const CardSchema = new Schema({
  name: String,
  detail: String,
  imageUrl: String,
});

// Compile model from schema
const Card = mongoose.model('Card', CardSchema);

// Routes
app.get('/cards', async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
});

app.post('/cards', async (req, res) => {
  const card = new Card({
    name: req.body.name,
    detail: req.body.detail,
    imageUrl: req.body.imageUrl,
  });

  try {
    const savedCard = await card.save();
    res.status(201).json(savedCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
