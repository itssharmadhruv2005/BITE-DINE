// backend/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require("./Routes/authRoutes");
const menuRoutes = require("./Routes/menuRoutes");
const orderRoutes = require("./Routes/orderRoutes");
const otpRoutes = require("./Routes/otpRoutes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/otp", otpRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
