// Project Requriements
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const errorHandler = require('./middlewares/errorHandler')
// const todoRoutes = require('./routes/todoRoutes');

require('dotenv').config()

// Initiating the process
const app = express();
const PORT = process.env.PORT || 80;
const dbName = process.env.DB_NAME || 'College'
// Dummy data - you can replace this with a database later

app.use(bodyParser.json());
// Decode the base64-encoded MongoDB URI
const decodedURI = Buffer.from(process.env.MONGODB_URI, 'base64').toString('utf-8');

  // Connect to MongoDB
mongoose.connect(decodedURI + "/"+dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log(`Connected to MongoDB:${decodedURI}`);
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);

});

// Error handling middleware
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });