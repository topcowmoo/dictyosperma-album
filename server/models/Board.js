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

boardSchema.virtual('columns', {
  ref: 'Column', // This is the model that will be used
  localField: '_id', // Find columns where `localField` (Board `_id`) matches `foreignField` (`boardId` in Column)
  foreignField: 'boardId',
});

const Board = model("Board", boardSchema);

module.exports = Board;
