function numberChecker(num) {
    if (num > 20) {
      return `${num} is greater than 20`; //If the number we pass is bigger than 20 it will return this message
    } else if (num === 20) {
      return `${num} is equal to 20`; //If the number we pass is equal to 20 it will return this message
    } else if (num < 20) {
      return `${num} is less than 20`; //If the number we pass is less than 20 it will return this message
    } else {
      return `${num} isn't even a number :(`; //If we pass a string we will get this message
    }
  }

  console.log(numberChecker("hello"));