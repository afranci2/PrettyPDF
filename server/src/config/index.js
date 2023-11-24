const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// Define routes here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
