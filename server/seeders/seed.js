const db = require('../config/connection');
const { User, Encounter } = require('../models');
const userSeeds = require('./userSeeds.json');
const encounterSeeds = require('./encounterSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Encounter.deleteMany({});

    await User.create(userSeeds);
    await Encounter.create(encounterSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
