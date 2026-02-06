const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB Connected!");
    return client.db("creativeHub");
  } catch (error) {
    console.error(" DB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
