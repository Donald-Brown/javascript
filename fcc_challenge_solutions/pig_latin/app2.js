function translatePigLatin(str) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];

  const firstChar = str[0];
  if(VOWELS.includes(firstChar)){
    return str + 'way';
  }

  if(str.split('').every(c => !VOWELS.includes(c))){
    return str +'ay';
  }

  const consonants = str.split(/[aeiou]/)[0];
  return str.substring(consonants.length) + consonants + 'ay';
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("rhythm"));