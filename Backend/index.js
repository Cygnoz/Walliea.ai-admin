const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./db/connection'); // MongoDB connection

const routes = require('./routes/router');

app.use(cors());
app.use(express.json({ limit: '10mb' })); // Increase JSON payload size limit
app.use(express.urlencoded({ limit: '10mb', extended: true })); // Increase URL-encoded payload size limit

// Add a specific route for raw file handling
app.post('/api/upload', express.raw({ type: 'application/octet-stream', limit: '10mb' }), (req, res) => {
  try {
    const fileBuffer = req.body; // Access the file as a Buffer
    // Save the file to your database or storage system
    console.log('Received file:', fileBuffer);
    res.status(200).send('File uploaded successfully!');
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).send('File upload failed');
  }
});

app.use('/api', routes);

// Test route
app.get('/', (req, res) => {
  res.send('WALLIEA admin!');
});

// Server listen
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

