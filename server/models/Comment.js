const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const commentSchema = new Schema({
  commentText: {
    type: String,
    required: true,
    max_length: 750,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp)
  },
  title: {
    type: String,
    required: false,
    trim: true,
    max_length: 75,
  },
  commentUser: {
    type: String,
    encounter: false,
    trim: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  encounterId: {
    type: Schema.Types.ObjectId,
    ref: "Encounter"
  },
  cooberations: [{
      type: Schema.Types.ObjectId, ref: "User"
  }] //seems like this might be best as an array of user ID's that have cooberated the encounter?

});

const Comment = model("Encounter", encounterSchema);

module.exports = Comment;
