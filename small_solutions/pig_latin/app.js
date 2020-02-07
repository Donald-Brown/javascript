function translatePigLatin(str) {
    let regex = /^[^aeiou]+/;
    let newConsonants = str.match(regex);
    return newConsonants;
}
console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("glove"));