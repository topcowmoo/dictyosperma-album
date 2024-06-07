const { Schema } = require("mongoose");

const cardSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  columnId: {
    type: Schema.Types.ObjectId,
    ref: "Column",
    required: true,
  },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;