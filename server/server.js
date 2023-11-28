const app = require('./src/app');
const mongoose = require('mongoose');

// Ensure environment variables are read.
require('dotenv').config();

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});
