function secondMatchesAmy(array) {
    if ( array[2] === "Amy") {
      return "Second index matched!";
    }
    else return "Second index not matched";
  }

  const students = ["Ahmed", "Maria", "Amy", "Nahidul", "Jack"];

  console.log(secondMatchesAmy(students))