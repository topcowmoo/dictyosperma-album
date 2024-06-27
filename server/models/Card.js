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
  position: {
    type: Number, // Mongoose type for numbers, graphql will understand this as Int, Int does not exist  in mongoose 
    required: true,
  },
});

const Card = model("Card", cardSchema);

module.exports = Card;
