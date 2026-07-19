import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    room: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message =
  mongoose.models.Message ||
  mongoose.model("Message", MessageSchema);

export default Message;