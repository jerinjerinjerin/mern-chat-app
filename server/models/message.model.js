import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chatuser',
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chatuser',
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true, versionKey: false });


const Message = mongoose.model('Message', messageSchema);

export default Message;