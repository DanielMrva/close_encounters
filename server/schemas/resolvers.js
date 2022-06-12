const { User, Encounter } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { sign } = require("jsonwebtoken");

const resolvers = {
  Query: {
    me: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
    user: async(parent, { userId }) => {
      return User.findOne({_id:userId});
    },
    users: async () => {
      return User.find().populate("encounters");
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    singleuser: async (parent, { email }) => {
      return User.findOne({ email: email });
    },
    allencounters: async () => {
      return Encounter.find();
    },
    encounters: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Encounter.find(params).sort({ createdAt: -1 });
    },
    encounter: async (parent, { encounterId }) => {
      return Encounter.findOne({ _id: encounterId });
    },
    visencounters: async (parent, {lowlat, hilat, lowlng, hilng}) => {
      return Encounter.find({$and: [{ lat : { $gte :  lowlat, $lte : hilat}}, {lng: {$gte: lowlng, $lte: hilng}}]});
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      const badAttempt = "Email or password has failed, please try again!";

      if (!user) {
        console.log("bad user", user);
        throw new AuthenticationError(badAttempt);
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        console.log("bad password", user);
        throw new AuthenticationError(badAttempt);
      }

      const token = signToken(user);

      return { token, user };
    },

    saveEncounter: async (
      parent,
      { encounterUser, date, category, type, lat, lng, title, description }
    ) => {
      const encounter = await Encounter.create({
        encounterUser,
        date,
        category,
        type,
        lat,
        lng,
        title,
        description,
      });

      await User.findOneAndUpdate(
        { username: encounterUser },
        { $addToSet: { encounters: encounter._id } }
      );
      return encounter;
    },
    removeEncounter: async (parent, { encounterId }) => {
      return Encounter.findOneAndDelete({ _id: encounterId });
    },
  },
};

module.exports = resolvers;
