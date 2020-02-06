function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
  let separator = /\s+|_+|(?=[A-Z])/g;
    str = str.split(separator).join("-").toLowerCase(); 

    return str;
  }
  
  console.log(spinalCase('This Is Spinal Tap'));
