const mongoose = require('mongoose');
//TODO: edit NEEDNAME to our db name
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/close_encounters_DB', {
        newUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;