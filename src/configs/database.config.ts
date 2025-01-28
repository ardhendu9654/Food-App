import { connect } from "mongoose";

export const dbConnect = async () => {
    try {
        await connect(process.env.MONGO_URI!);
        console.log('Connected Successfully');
    } catch (error) {
        console.error('Connection error:', error);
    }
};
