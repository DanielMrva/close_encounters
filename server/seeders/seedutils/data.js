const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const moreWords = [
    "monster", 
    "alien", 
    "ghost", 
    "zombie", 
    "sacred", 
    "probed", 
    "abducted", 
    "mauled", 
    "attacked", 
    "paralized", 
    "Unicorn", 
    "Big Foot", 
    "Nessie", 
    "Moth-Man", 
    "Tom Cruise", 
    "spider", 
    "cryptid", 
    "specter", 
    "grandfather", 
    "grandmother", 
    "dead", 
    "UFO", 
    "silver", 
    "cigar", 
    "triangle", 
    "silent", 
    "zoom", 
    "stalked", 
    "slithered", 
    "swam", 
    "glowed", 
    "Grey", 
    "Sasquach", 
    "slime", 
    "sonic-boom", 
    "exploded", 
    "floated", 
    "drifted", 
    "ectoplasim", 
    "teleported", 
    "undead", 
    "ran", 
    "nightime", 
    "spoke to me", 
    "attacked me",
    "animal mutilations",
    "Bermuda Triangle",
    "Cetus",
    "dreamland",
    "Foo Fighters",
    "flying disk",
    "flying saucer",
    "faded giant",
    "MK Ultra",
    "Orion",
    "Epsilon Eridani",
    "Pluto",
    "rainbow",
    "Saint",
    "stigmata",
    "Thomas",
    "Augustine",
    "Abrosima",
    "Catherine of Genoa",
    "flash",
    "bang",
    "umbrella",
    "ultra terrestrials",
    "Zeta Reticuli",
    "slow",
    "hovered",
    "landed",
    "flew",
    "disappeared",
    "exploded",
    "crashed",
    "greeted",
    "captured",
    "hid",
    "punched bigfoot",
    "disceted",
    "hybrid",
    "alien-human",
    "monster-human",
    "half-man",
    "satyr",
    "gryphon",
    "beholder",
    "Demi-Gorgon",
    "upsidedown",
    "chem trails",
    "implanted chip",
    "woke up",
    "went to sleep",
    "lost"
]

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 5,
      min: 3
    },
    wordsPerSentence: {
      max: 8,
      min: 2
    },
    words: [...moreWords]
});


const rndInt = (int) => {
    return Math.floor((Math.random() * 3) + int)
};

const randomText = (int) => {
    return lorem.generateSentences(int);
};

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];


function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    
  
    return parseFloat(str);
}

// const getRandomDate = () => {
//     let utcDate = Date.now();
//     let randomDate = utcDate - Math.floor((Math.random) * 1103760000000);
//     let stableDate = new Date(randomDate);
//     let formatDate = `${stableDate.getMonth()}/${stableDate.getDate}/${stableDate.getFullYear}}`
//     return formatDate;
// }

const type = ["Extraterrestrial", "Paranormal", "Zoological"];

const category = ['Visual Sighting', 'Audible Sighting', 'Physical contact', 'Environmental change', 'PsychoKinesis'];

const getEncounters = (qtt, descLength) => {
    const encounters = [];
    for (i = 0; i < qtt; i++) {
        encounters.push({
            category: getRandomArrItem(category),
            type: getRandomArrItem(type),
            lat: getRandomFloat(37, 42, 4),
            lng: getRandomFloat(-95, -110, 4),
            title: randomText(1),
            description: randomText(rndInt(descLength)),
            // date: (Date.now())
        })
    } 
    console.log(encounters);
    return encounters;
}

module.exports = {getEncounters, getRandomArrItem, category, type, getRandomFloat, rndInt, randomText}