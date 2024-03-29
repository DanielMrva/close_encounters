const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const encounterSchema = require("./Encounter");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // match: [/.+@.\..+/, 'Must match an email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  profilepic: {
    type: String,
  },
  encounters: [
    {
      type: Schema.Types.ObjectId,
      ref: "Encounter",
    }],
  comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment' }]
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;

// adding profilepic field
