const { User, Encounter } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { sign } = require('jsonwebtoken');

const resolvers = {
    Query: {
        me: async (parent, {_id}) => {
            const params = _id ? { _id } : {};
            return User.find(params);
        }
    },
//     Mutation: {
//         addUser: async (parent, { username, email, password }) => {
//             const user = await User.create({username, email, password });

//             const token = signToken(user);

//             return { token, user };
//         },
//         login: async (parent, { email, password }) => {
//             const user = await User.findOne({ email });

//             const badAttempt = 'Username or password has failed, please try again!';

//             if (!user) {
//                 throw new AuthenticationError(badAttempt);
//             }

//             const correctPassword = await user.isCorrectPassword(password);

//             if (!correctPassword) {
//                 throw new AuthenticationError(badAttempt);
//             }

//             const token = signToken(user);

//             return { token, user}
//         },
//         saveEncounter: async (parent, { user, encounterId, category, location, description  }) => { const updatedUser = await User.findOneAndUpdate(
//             {_id: user._id },
//             { $addToSet: {savedBooks: {
//                 encounterId: encounterId,
//                 category: category,
//                 location: location,
//                 description: description,
//             }}},
//             {new: true, runValidators: true }
//             );
//         },
//         removeBook: async (parent, { user, bookId }) => {
//             const updatedUser = await User.findOneAndUpdate(
//                 { _id: user.id },
//                 { $pull: { saveEncounter: { encounterId: encounterId }}},
//                 { new: true }
//             );
//         }
//     }
}

module.exports = resolvers;
