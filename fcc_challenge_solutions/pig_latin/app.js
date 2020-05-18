/**
 * Intermediate Algorithm Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".
 */

function translatePigLatin(str) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];

  const firstChar = str[0];
  if(VOWELS.includes(firstChar)){
    return str + 'way';
  }
  
  let noVowels = true;
  for(const c of str){
    if(VOWELS.includes(c)){
      noVowels = false;
      break;
    }
  }
  if(noVowels){
    return str + 'ay';
  }

  let consonants = '';
  let firstVowelIndex = 0;
  for(let i=0; i<str.length; i++){
    const c = str[i];
    if(VOWELS.includes(c)){
      firstVowelIndex = i;
      break;
    }
    consonants += c;
  }
  return str.substring(firstVowelIndex) + consonants + 'ay';
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("rhythm"));