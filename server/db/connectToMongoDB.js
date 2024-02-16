import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL,)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

export default connectDatabase;