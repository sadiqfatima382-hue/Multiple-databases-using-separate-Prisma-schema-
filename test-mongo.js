import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);

try {
  await client.connect();
  console.log("✅ MongoDB Connected Successfully");
  await client.close();
} catch (err) {
  console.error("❌ Connection Failed");
  console.error(err);
}