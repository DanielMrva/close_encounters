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
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    users: async () => {
      return User.find().populate(["encounters", "comments"]);
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate(["encounters","comments"]);
    },
    singleuser: async (parent, { email }) => {
      return User.findOne({ email: email });
    },
    allencounters: async () => {
      return Encounter.find().populate(["userId", "commentId"]);
    },
    encounters: async (parent, { username }) => {
      console.log("test");
      const params = username ? { username } : {};
      return await Encounter.find(params).sort({ createdAt: -1 }).populate(["userId", "commentId"]);
    },
    encounter: async (parent, { encounterId }) => {
      return Encounter.findOne({ _id: encounterId }).populate(["userId", "commentId"]);
    },
    visencounters: async (parent, {lowlat, hilat, lowlng, hilng}) => {
      return Encounter.find({$and: [{ lat : { $gte :  lowlat, $lte : hilat}}, {lng: {$gte: lowlng, $lte: hilng}}]}).populate(["userId", "commentId"]);
    },
    encounterComments: async (parent, { encounterId }) => {
      return Comment.find({ encounterId: encounterId }).populate("userId").sort({ createdAt: -1 });
    },
    userComments: async (parent, { userId }) => {
      return Comment.find({ userId: userId }).populate(["userId", "encounterId"]).sort({ createdAt: -1 });
    },
    allcomments: async () => {
      return Comment.find().populate(["userId", "encounterId"]).sort({ createdAt: -1 });
    },
    oncComment: async (parent, { commentId }) => {
      return Comment.findOne({ _id: commentId });
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      let profilepicoptions = [
        "profilepic",
        "profilepic1",
        "profilepic2",
        "profilepic3",
        "profilepic4",
        "profilepic5",
        "profilepic6",
      ];

      let getRandomArrItem = (arr) =>
        arr[Math.floor(Math.random() * arr.length)];

      let profilepic = getRandomArrItem(profilepicoptions);

      const user = await User.create({ username, email, password, profilepic });
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
      {
        encounterUser,
        date,
        category,
        type,
        lat,
        lng,
        title,
        description,
        userId,
      }
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
        userId,
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
