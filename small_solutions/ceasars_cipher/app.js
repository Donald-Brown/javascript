
function rot13(str) {
    let output = '';

    for(const C of str){
        if(!/[A-Z]/.test(C)){
            output += C;
        }else{
            let charCode = C.charCodeAt(0);
            charCode -= 13;
            if (charCode < 65){
                charCode += 26;
            }
            output += String.fromCharCode(charCode);
        }
    }
    return output;
}
  
console.log(rot13('LBH QVQ VG!'));