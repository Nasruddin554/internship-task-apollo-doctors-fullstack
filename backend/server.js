const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const doctorRoutes = require('./routes/doctors');

const app = express();

// Middleware
app.use(bodyParser.json());


// Enable CORS for all routes
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:8080'], // Allow both frontend URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Routes
app.use('/api/doctors', doctorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});