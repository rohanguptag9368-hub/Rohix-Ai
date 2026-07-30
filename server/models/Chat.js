import mongoose from "mongoose";

// ================= Message Schema =================

const messageSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["user", "assistant", "system"],
      required: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
    timestamps: true,
  }
);

// ================= Chat Schema =================

const chatSchema = new mongoose.Schema(
  {
    // Logged-in User (Optional)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // Guest User Support
    guestId: {
      type: String,
      default: null,
    },

    // Chat Title
    title: {
      type: String,
      default: "New Chat",
      trim: true,
    },

    // AI Model Used
    model: {
      type: String,
      default: "llama-3.3-70b-versatile",
    },

    // Conversation
    messages: [messageSchema],

    // Features
    bookmarked: {
      type: Boolean,
      default: false,
    },

    favorite: {
      type: Boolean,
      default: false,
    },

    archived: {
      type: Boolean,
      default: false,
    },

    // AI Metadata
    webSearch: {
      type: Boolean,
      default: false,
    },

    imageInput: {
      type: Boolean,
      default: false,
    },

    imageOutput: {
      type: Boolean,
      default: false,
    },

    // Future Folder Support
    folder: {
      type: String,
      default: "General",
    },

    // Token Usage
    totalTokens: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// ================= Export =================

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;