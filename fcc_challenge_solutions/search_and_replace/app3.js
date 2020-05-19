// This with the first function only replace the first occurance
function myReplace(str, before, after) {
  const afterCase = ( /[A-Z]/.test(before[0])
    ? after[0].toUpperCase() 
    : after[0].toLowerCase()
    ) + after.substring(1);

  return str.replace(before, afterCase);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
