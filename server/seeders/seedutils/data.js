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
    "umprella",
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
    "upsideown",
    "chem trails",
    "implanted chip",
    "woke up",
    "went to sleep",
    "lost"
]

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 16,
      min: 8
    },
    wordsPerSentence: {
      max: 16,
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

// const randomLat = () => {
//     const rndNum = Math.random() + Math.floor((Math.random() * 55))
//     const boundedLat = parseFloat(rndNum.toFixed(4));
//     if(60 >= boundedLat && boundedLat >= 25) {
//     // console.log(boundedLat);
//     return boundedLat
//     } else {
//         randomLat();
//     }
// }

// const randomLng = () => {
//     const rndNum = (Math.random() * 65) + Math.floor((Math.random() * 65))
//     console.log(rndNum);
//     const boundedLng = parseFloat(rndNum.toFixed(4));
//     console.log(boundedLng)
//     if(130 >= boundedLng && boundedLng >= 60) {
//         const negLng = boundedLng * -1
//         console.log(negLng);
//         console.log(`------------`)
    
//         return negLng;
//     } else {
//         console.log(`failed`)
//         randomLng();
//     }
// };

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    
  
    return parseFloat(str);
}

const category = ["Extraterrestrial", "Paranormal", "Zoological"];

const type = ['Visual Sighting', 'Audible Sighting', 'Physical contact', 'Environmental change', 'PsychoKinesis'];

const getEncounters = (qtt, descLength) => {
    const encounters = [];
    for (i = 0; i < qtt; i++) {
        encounters.push({
            category: getRandomArrItem(category),
            type: getRandomArrItem(type),
            lat: getRandomFloat(25, 55, 4),
            lng: getRandomFloat(-65, -135, 4),
            title: randomText(1),
            description: randomText(rndInt(descLength))
        })
    } 
    console.log(encounters);
    return encounters;
}

const numTest = (int) => {
    const test = [];
    for(i = 0; i < int; i++) {
        test.push({
            lat: getRandomFloat(-61, -131, 4),
            lng: getRandomFloat(25, 55, 4)
        })

    }
    console.log(test);
}

// numTest(400);

getEncounters(10, 10);

// module.exports = {getEncounters, getRandomArrItem, category, type, getRandomFloat, rndInt, randomText}