function translatePigLatin(str) {
    if(str.match(/^[aeiou]/)){
        return str.concat('way');
    } else {
        const consonants = str.match(/^[^aeiou]+/)[0];
        //return consonants;
        return str.substring(consonants.length).concat(consonants.concat('ay'));
    }
}
console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("glove"));

console.log(translatePigLatin("osupercalifragilistic"));