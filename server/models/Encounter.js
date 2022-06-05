const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const encounterSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),    
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
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }  
});

const Encounter = model('Encounter', encounterSchema);
  
module.exports = Encounter;