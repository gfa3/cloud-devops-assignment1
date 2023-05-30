const students = 15
const mentors = 8

const pStudents = Math.round((students/(students + mentors)) * 100)
const pMentors = Math.round((mentors/(students + mentors)) * 100)

console.log("Percentage Students: " + pStudents + "%")
console.log("Percentage Mentors: " + pMentors + "%")

