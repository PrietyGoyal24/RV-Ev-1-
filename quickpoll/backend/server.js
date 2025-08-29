

const express = require("express");
const cors = require("cors");
const pollRoutes = require("./routes/pollRoutes");

const app = express();

// Middleware
app.use(express.json());

// CORS setup (frontend port allow)
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));

// Routes
app.use("/api/polls", pollRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));