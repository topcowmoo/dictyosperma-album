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

columnSchema.virtual('cards', {
  ref: 'Card', // This is the model that will be used
  localField: '_id', // Find the cards where localfield (column '_id') matches foreignfield ('columnId' in card)
  foreignField: 'columnId',
});

const Column = model("Column", columnSchema);

module.exports = Column;
