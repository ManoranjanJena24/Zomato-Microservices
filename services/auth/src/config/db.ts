import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Note: ensure process.env.MONGO_URI is defined in your .env file
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "Zomato_Microservices",
    });

    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
