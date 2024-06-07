const { Schema, model } = require("mongoose");

const boardSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Board = model("Board", boardSchema);

module.exports = Board;
