const getRandomDate = () => {
    let utcDate = Date.now();
    let randomDate = (utcDate - (Math.floor(Math.random * 946080000000)));
    let stableDate = new Date(randomDate);
    let formatDate = `${stableDate.getMonth()}/${stableDate.getDate}/${stableDate.getFullYear}}`
    return randomDate;
}

console.log(getRandomDate());