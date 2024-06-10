const { Schema, model } = require("mongoose");

const columnSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: "Board",
    required: true,
  },
});

const Column = model("Column", columnSchema);

module.exports = Column;
