const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const expressValidator = require("express-validator");
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

// Set up middleware
app.use(morgan("dev")); // HTTP request logger middleware
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(expressValidator()); // Request validation middleware

// Import and use routes
const postRoutes = require("./routes/post");
app.use("/", postRoutes); // Mount post routes at the root path

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
