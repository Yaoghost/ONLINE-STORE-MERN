// config and establish connection to the db 
import mongoose from "mongoose";

export async function connectDB() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not set");
    }
    const conn = await mongoose.connect(process.env.MONGO_URI); // no legacy options
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`DB Connect Error: ${error.message}`);
    // Helpful extra context:
    if (error.code) console.error(`Code: ${error.code}`);
    if (error?.reason) console.error(`Reason: ${error.reason}`);
    process.exit(1);
  }
}
