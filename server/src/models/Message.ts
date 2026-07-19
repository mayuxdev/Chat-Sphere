import mongoose, { Schema, type InferSchemaType } from "mongoose";

const messageSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },

    room: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export type MessageDocument = InferSchemaType<typeof messageSchema>;

const Message =
  mongoose.models.Message ||
  mongoose.model("Message", messageSchema);

export default Message;