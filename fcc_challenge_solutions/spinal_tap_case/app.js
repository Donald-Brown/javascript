/**
 * Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 * spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
 */

function spinalCase(str) {
    const words = [];
    let word = '';

    for(const c of str){
        if(c === '_' || c === ' '){
            words.push(word);
            word = '';
        }else if(c >= 'A' && c <= 'Z' && !word.length){
            word = c.toLowerCase();
        }else if(c >= 'A' && c <= 'Z' && word.length){
            words.push(word);
            word = c.toLowerCase();
        }else{
            word += c;
        }
    }
    if(word.length){
        words.push(word);
    }

    return words.join('-');
}
  
console.log(spinalCase('This Is Spinal Tap'));