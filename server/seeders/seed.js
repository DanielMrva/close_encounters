const db = require("../config/connection");
const { User, Encounter, Comment } = require("../models");
const userSeeds = require("./userSeeds.json");
const encounterSeeds = require("./encounterSeeds.json");
const { getEncounters, getComments } = require("./seedutils/data");

db.once("open", async () => {
  try {
    //clears our db at beginning
    await User.deleteMany({});
    await Encounter.deleteMany({});
    await Comment.deleteMany({});

    //creates users and encounters

    let moreEncounters = getEncounters(100, 4);
    let moreComments = getComments(400, 3);

    await User.create(userSeeds);
    await Encounter.create(encounterSeeds);
    await Encounter.insertMany(moreEncounters);
    await Comment.create(moreComments);

    //creates an array of users and encounters
    const users = await User.find({});
    const encounters = await Encounter.find({});
    const comments = await Comment.find({});
    // console.log(comments)

    //for loop to seed encounters and users
    for (let i = 0; i < encounters.length; i++) {
      const enc = encounters[i];
      const use = users[Math.floor(Math.random() * users.length)];
      await User.findOneAndUpdate(
        { _id: use._id },
        { $addToSet: { encounters: enc._id } }
      )
        .then((encounter) =>
          !encounter
            ? console.log("no encounter found")
            : Encounter.findOneAndUpdate(
                { _id: enc._id },
                { $set: { userId: use._id, encounterUser: use.username } }
              ).then((user) =>
                !user
                  ? console.log("no user found")
                  : console.log(`added encounter: ${enc.title}`)
              )
        )
        .catch((err) => console.log(err));
    }

    for (let j = 0; j < comments.length; j++) {
      const com = comments[j];
      const enc = encounters[Math.floor(Math.random() * encounters.length)];
      const use = users[Math.floor(Math.random() * users.length)];

      await User.findByIdAndUpdate(
        { _id: use._id },
        { $addToSet: { comments: com._id } }
      )
        .then((comment) => 
          !comment
            ? console.log("no comment found")
            : Comment.findOneAndUpdate(
              { _id: com._id },
              { $set: { userId: use._id, commentUser: use.username}},
            ).then((comment) => 
              !comment
                ? console.log("no comment found 2")
                : Encounter.findByIdAndUpdate(
                  { _id: enc._id },
                  { $addToSet: { commentId: com._id }}
                ).then((comment) => 
                  !comment
                    ? console.log("no comment found 3")
                    : console.log(`added comment: ${com.commentText}`)
                )
            )
           
        )
        .catch((err) => console.log(err));
    }

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
