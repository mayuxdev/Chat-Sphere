import type { Request, Response } from "express";
import Message from "../models/Message.js";

export async function getMessages(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const room = String(req.params.room);
    const messages = await Message.find({
   
      room,
    }).sort({
      createdAt: 1,
    });

    res.status(200).json(messages);
  } catch {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
}
