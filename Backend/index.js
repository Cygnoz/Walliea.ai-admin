const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
require('./db/connection'); // Ensure the path to your MongoDB connection is correct

const routes = require('./routes/router')
app.use(cors())
app.use(express.json());

// Increase payload limit
app.use(bodyParser.json({ limit: '6mb' })); // Increase limit for JSON payload
app.use(bodyParser.urlencoded({ limit: '6mb', extended: true })); // Increase limit for URL-encoded payloads

app.use('/api', routes); 
// Test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Server listen
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection string with database name
// const username = "dev";
// const password = "walliea";
// const dbName = "WallMark";  // Specify the database name
// const mongodb_uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@wallmark.tmreg.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=WallMark`;

// // Define the Registration Schema for MongoDB
// const registrationSchema = new mongoose.Schema({
//     fullname: {
//         type: String,
//         required: true
//     },
//     phone_no: {
//         type: String,
//         required: true
//     },
//     company_name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     }
// }, {
//     collection: 'registerSchema',  // Explicitly specify collection name
//     strict: false  // This allows for flexible document structure
// });

// // Create the model with explicit database and collection names
// const Registration = mongoose.model('Registration', registrationSchema, 'registerSchema');

// // Connect to MongoDB with debug logging
// mongoose.connect(mongodb_uri)
//     .then(() => {
//         console.log('Connected to MongoDB');
//         // Log the current database and collections
//         mongoose.connection.db.listCollections().toArray((err, collections) => {
//             if (err) {
//                 console.error('Error listing collections:', err);
//             } else {
//                 console.log('Available collections:', collections.map(c => c.name));
//             }
//         });
//     })
//     .catch(err => console.error('Failed to connect to MongoDB:', err));

// // GET endpoint with debug logging
// app.get('/registrations', async (req, res) => {
//     try {
//         const registrations = await Registration.find({}).lean();
//         console.log('Query executed. Found documents:', registrations.length);
        
//         // Log the first document if exists (for debugging)
//         if (registrations.length > 0) {
//             console.log('Sample document:', registrations[0]);
//         }

//         res.json({
//             success: true,
//             count: registrations.length,
//             data: registrations
//         });
//     } catch (error) {
//         console.error('Error fetching registrations:', error);
//         res.status(500).json({
//             success: false,
//             error: error.message
//         });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });