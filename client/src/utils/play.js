// const getRandomDate = () => {
//     let utcDate = Date.now();
//     let randomDate = utcDate - (Math.floor(Math.random() * 1576800000000));
//     let stableDate = new Date(randomDate).toISOString();
//     let formatDate = stableDate.split('T');

    // console.log('<-----------------UTC----------------->');
    // console.log(utcDate);
    // console.log('<-----------------RND----------------->');
    // console.log(randomDate);
    // console.log('<-----------------STA----------------->');
    // console.log(stableDate);
    // console.log('<-----------------FOR----------------->');
    // console.log(formatDate[0]);
    // console.log('<-----------------END----------------->');

//     return formatDate[0];
// };

// console.log(getRandomDate());

// getRandomDate();

let object1 = {
    id: 1,
    username: "dude",
    email: "dude@dudemail.com",
    password: "superSecure"
}

let object2 = {
    encounters: "e1"
}

Object.assign(object1, object2);

console.log(object1);
