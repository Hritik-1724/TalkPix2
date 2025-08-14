import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error("MONGODB_URI is not set in environment variables");
        }
        await mongoose.connect(mongoUri);
        console.log('mongodb connected 🌿');
    } catch (error) {
        console.error(`MongoDB Error: ${error.message}`);
    }
}
export default connectDB;