const db = require('../config/connection');
const { User, Encounter } = require('../models');
const userSeeds = require('./userSeeds.json');
const encounterSeeds = require('./encounterSeeds.json');

db.once('open', async () => {
  try {
    //clears our db at beginning
    await User.deleteMany({});
    await Encounter.deleteMany({});

    //creates users and encounters
    await User.create(userSeeds);
    await Encounter.create(encounterSeeds);

    //creates an array of users and encounters
    const users = await User.find({});
    const encounters = await Encounter.find({});

    //for loop to seed encounters and users
    for(let i = 0; i < encounters.length; i++) {
      const enc = encounters[i];
      const use = users[Math.floor(Math.random() * users.length)];
      await User.findOneAndUpdate(
        {_id: use._id},
        {$addToSet: {encounters: enc._id}}
      )
      .then((encounter) =>
      !encounter
      ? console.log('no encounter found')
      : Encounter.findOneAndUpdate(
        {_id: enc._id},
        {$set: {userId: use._id}}
      )
      .then((user) =>
      ! user? console.log('no user found')
      : console.log(`added ${enc._id}`)
      )
      )
      .catch((err) => console.log(err));
    } 

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
