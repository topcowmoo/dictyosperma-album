const { Schema, model } = require("mongoose");

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
  //   position: {      // This will likely be handled in context rather than

  //   }
});

const Card = model("Card", cardSchema);

module.exports = Card;
