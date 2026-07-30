import Chat from "../models/Chat.js";

// ================= CREATE CHAT =================
export const createChat = async (req, res) => {
  try {
    const chat = await Chat.create(req.body);

    res.status(201).json({
      success: true,
      message: "Chat created successfully",
      chat,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET ALL CHATS =================
export const getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find().sort({
      updatedAt: -1,
    });

    res.status(200).json({
      success: true,
      chats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET SINGLE CHAT =================
export const getChat = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);

    if (!chat) {
      return res.status(404).json({
        success: false,
        message: "Chat not found",
      });
    }

    res.status(200).json({
      success: true,
      chat,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE CHAT =================
export const updateChat = async (req, res) => {
  try {
    const chat = await Chat.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Chat updated",
      chat,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= DELETE CHAT =================
export const deleteChat = async (req, res) => {
  try {
    await Chat.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Chat deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= BOOKMARK CHAT =================
export const bookmarkChat = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);

    if (!chat) {
      return res.status(404).json({
        success: false,
        message: "Chat not found",
      });
    }

    chat.bookmarked = !chat.bookmarked;

    await chat.save();

    res.status(200).json({
      success: true,
      message: "Bookmark updated",
      chat,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};