const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const encounterSchema = new Schema({
  description: {
    type: String,
    required: true,
    max_length: 250,
  },
  type: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp)
  },
  lat: {
    type: Number,
    required: true,
    trim: true,
  },
  lng: {
    type: Number,
    required: true,
    trim: true,
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
    default: 'These ten strange things that happened, #7 will blow your mind',
    max_length: 75,
  },
  encounterUser: {
    type: String,
    encounter: false,
    trim: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  commentId: [{
    type: Schema.Types.ObjectId,
    ref: "Comment",
  }],
  corroborations : [{
    type: Schema.Types.ObjectId, ref: "User"
  }]

});

encounterSchema.methods.coCount = function () {
  coCount = this.corroborations .length();
}

const Encounter = model("Encounter", encounterSchema);

module.exports = Encounter;
