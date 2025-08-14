import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoUri = 'mongodb+srv://hritikoff:icqAPh2oD6DgzsSP@cluster0.04rmqxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
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