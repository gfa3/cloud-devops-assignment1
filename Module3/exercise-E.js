function getAge(birthYear){
    return 2023 - birthYear
}

const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

const ages = years.map(function(years){
    return getAge(years)
})

console.log(ages)