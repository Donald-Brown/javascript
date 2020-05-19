function myReplace(str, before, after) {
  const isCapital = before[0] >= "A" && before[0] <= "Z"; // capital?
  let afterCase;
  if (isCapital) {
    afterCase = after[0].toUpperCase() + after.substring(1);
  } else {
    afterCase = after[0].toLowerCase() + after.substring(1);
  }

  let replaceStr = str;
  for (let i = 0; i < replaceStr.length; i++) {
    const iString = replaceStr.substring(i, i + before.length);
    if (iString === before) {
      replaceStr =
        replaceStr.substring(0, i) +
        afterCase +
        replaceStr.substring(i + before.length);
      i += after.length - 1;
    }
  }
  return replaceStr;
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
