const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const mongoose = require("mongoose");

const dashboardRoutes = require('./routes/dashboardRoutes');
const predictionRoutes = require('./routes/predictionRoutes');
const alertRoutes = require('./routes/alertRoutes');
const wardsRoutes = require("./routes/wards");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// connectDB(); // Optional for now

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/predictions', predictionRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/hospital", { useNewUrlParser: true });


app.use("/api", wardsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
