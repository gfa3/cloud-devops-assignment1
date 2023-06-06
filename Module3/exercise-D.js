function magician(yourFunc) {
    console.log(
      "I am magician! Watch as I mutate an array of strings to your heart's content!"
    );
    const namesArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];

    const sortedNames = namesArray.sort()
  
    const upperNames = sortedNames.map(name => name.toUpperCase());
  
    return upperNames;
  }

  console.log(magician())