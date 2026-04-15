import connection from "./config/database.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./.env" });

const startServer = async () => {
  try {
    console.log("MONGODB_URI:", process.env.MONGODB_URI);
    await connection();

    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port : ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

console.log(
  "MongoDB URI Check:",
  process.env.MONGODB_URI ? "✅ Found" : "❌ Not Found",
);
startServer();
