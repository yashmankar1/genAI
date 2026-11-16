require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/datanase");

async function startServer() {
  try {
    await connectDB();

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (err) {
    console.log("Failed to start the server", err);
    process.exit(1);
  }
}

startServer();
