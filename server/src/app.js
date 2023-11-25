const express = require('express');
const cors = require('cors');
const rateLimit = require('./middleware/rateLimit');
const uploadRoutes = require('./routes/upload');
const { errorHandler } = require('./utils/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
// app.use(rateLimit); // Apply rate limiting as a global middleware

// Static directory
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/upload', uploadRoutes);

app.use(errorHandler);

module.exports = app;
