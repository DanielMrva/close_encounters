const { User, Encounter } = require('../models');

const resolvers = {
    Query: {
    user: async () => {
        return User.find({});
    },
    encounters: async (parent, { _id }) => {
        const params = _id ? { _id } : {};
        return Encounter.find(params);
    },
  },
}

module.exports = resolvers;
