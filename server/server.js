// server/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

// Load environment variables
dotenv.config({ path: './.env' });

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Body parser for JSON data
app.use(cors()); // Enable CORS for all requests (for development)

// Define API Routes
app.use('/api/people', require('./routes/people'));
app.use('/api/projects', require('./routes/projects'));

// Basic route for testing
app.get('/', (req, res) => {
    res.send('RAI-Lab Backend API is running...'); // Updated message
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));