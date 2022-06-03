const { User, Encounter } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, {_id}) => {
            const params = _id ? { _id } : {};
            return User.find(params);
        }
    },
}

module.exports = resolvers;
