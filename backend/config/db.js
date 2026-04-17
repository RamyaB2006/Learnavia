const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
        await mongoose.connect(mongoURI);
        console.log("✅ Connected to MongoDB successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:");
        console.error(error.message);
        // Throw the error so the calling function/Vercel knows something went wrong
        throw error;
    }
}
module.exports = connectDB