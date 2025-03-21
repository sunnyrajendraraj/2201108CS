const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const numbersRoutes = require('./routes/numbersRoutes');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/numbers', numbersRoutes);

// const cors = require("cors");
// app.use(cors());  // Allow frontend to access backend

const PORT = process.env.PORT || 9876;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
