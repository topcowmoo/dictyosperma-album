const { Schema } = require("mongoose");

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

const Column = mongoose.model("Column", columnSchema);

module.exports = Column;
