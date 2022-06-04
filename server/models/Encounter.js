const { Schema, model } = require('mongoose');

const encounterSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        max_length: 250,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }  
});

const Encounter = model('Encounter', encounterSchema);
  
module.exports = Encounter;