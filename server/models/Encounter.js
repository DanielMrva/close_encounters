// const { Schema, model } = require("mongoose");
// const dateFormat = require("../utils/dateFormat");

// const encounterSchema = new Schema({
//   encounterUser: {
//     type: String,
//     required: false,
//     trim: true,
//   },
//   // date: {
//   //   type: Date,
//   //   default: Date.now,
//   //   get: (timestamp) => dateFormat(timestamp),
//   //   required: true,
//   // },
//   date: {
//     type: String,
//     required: false,
//     trim: true,
//   },
//   category: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   type: {
//     type: String,
//     required: true,
//   },
//   lat: {
//     type: Number,
//     required: true,
//     trim: true,
//   },
//   lng: {
//     type: Number,
//     required: true,
//     trim: true,
//   },
//   title: {
//     type: String,
//     required: false,
//     default: 'Test Title',
//     max_length: 75,
//   },
//   description: {
//     type: String,
//     required: true,
//     max_length: 250,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     get: (timestamp) => dateFormat(timestamp),
//   },
//   userId: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//   },
// });

// const Encounter = model("Encounter", encounterSchema);

// module.exports = Encounter;


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
    encounterUser: {
    type: String,
    required: false,
    trim: true,
  },
    userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Encounter = model("Encounter", encounterSchema);

module.exports = Encounter;
