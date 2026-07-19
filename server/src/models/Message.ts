import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema(
  {
    username: String,
    room: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Message ||
  mongoose.model("Message", MessageSchema);