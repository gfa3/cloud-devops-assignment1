function getBornYear(year){
    return 2023 - year
}

function getSentence(name,year){
    const bornyear = getBornYear(year)
    const message = "My name is " + name + " and I was born in " + bornyear
    return message
}

const myname = "Georgina"
const myyear = 25

const sentence = getSentence(myname,myyear)
console.log(sentence)