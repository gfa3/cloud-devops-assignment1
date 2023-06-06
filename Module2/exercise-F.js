function checkUser(username,usertype){
    let length = username.length
    if ((((username.charAt(0) === username.charAt(0).toUpperCase()) && (length >=5 && length <= 10))) && (usertype === "admin" || usertype === "manager")){
      return "Username valid"
    }
    else {
      return "Username invalid"
  }
}

console.log(checkUser("Hello","admin"));