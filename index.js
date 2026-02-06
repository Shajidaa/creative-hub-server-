const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connect and Start Server
connectDB().then((db) => {
  app.locals.projectsCollection = db.collection("projects");

  // Routes
  app.use("/projects", projectRoutes);

  app.get("/", (req, res) => res.send("Creative Hub API is Running..."));

  app.listen(port, () => {
    console.log(`🚀 Server is flying on port ${port}`);
  });
});
