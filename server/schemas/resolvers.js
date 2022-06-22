const { User, Encounter, Comment } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { sign } = require("jsonwebtoken");
const { faCommentSlash } = require("@fortawesome/free-solid-svg-icons");

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
      return User.find().populate("encounters").populate("comments");
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
    },
    encounterComments: async (parent, { encounterId }) => {
      return Comment.find({ encounterId: encounterId }).sort({ createdAt: -1 });
    },
    userComments: async (parent, { userId }) => {
      return Comment.find({ userId: userId }).sort({ createdAt: -1 });
    },
    allcomments: async () => {
      return Comment.find();
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
      await Comment.deleteMany({encounterId: encounterId});
      await Encounter.findOneAndDelete({ _id: encounterId });
      return Encounter
    },
    saveComment: async (
      parent, {commentText, title, commentUser, encounterId, userId}
    ) => {
      const comment = await Comment.create({
        commentText,
        title,
        commentUser,
        encounterId,
        userId
      });

      await Encounter.findOneAndUpdate(
        { _id: encounterId },
        { $addToSet: {commentId: comment._id}}
      )

      await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: {comments: comment._id} }
      )

      return comment;
    },
    cooberateEncounter: async (parent, { encounterId, userId }) => {
      const encounter = await Encounter.findOneAndUpdate(
        { _id: encounterId }, 
        { $addToSet: {cooberations: userId}}
        );
        return encounter;
    },
    cooberateComment: async (parent, {commentId, userId}) => {
      const comment = await Comment.findOneAndUpdate(
        { _id: commentId },
        { $addToSet: {cooberations: userId}}
      );
      return comment;
    }

  },
};

module.exports = resolvers;
