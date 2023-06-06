const students1 = ["Georgina", "Susana", "Erick"];
const students2 = ["Daniel", "Irina", "Gordon", "Ashleigh"];

const allstudents = students1.concat(students2)
const orderStudents = allstudents.sort()
console.log(orderStudents)

function searchStudent(array,name){
    if (array.includes(name) === true){
        console.log(name + " is at the class with " + array)
    }
    else {
        console.log(name + " is not at the class with " + array)
    }
}

searchStudent(orderStudents,"Erick")