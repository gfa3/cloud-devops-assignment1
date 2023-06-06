const bool = true
const boolType = typeof bool
console.log(boolType)

function boolChecker(bool) {
    if (typeof bool === "boolean") {
      return "You've given me a bool, thanks!";
    }
    return "No bool, not cool.";
  }
  
  console.log(boolChecker(false));