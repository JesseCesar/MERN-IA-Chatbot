import mongoose from "mongoose";
const ChatSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
});
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    chats: [ChatSchema]
});
export default mongoose.model("User", UserSchema);
//# sourceMappingURL=User.js.map