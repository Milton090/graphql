import mongoose from 'mongoose';

export const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URL as string);
      console.log("MongoDB Connected");
   } catch (error) {
      console.log("Error connecting to MongoDB", error);
   }
};