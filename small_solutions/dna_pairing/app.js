function pairElement(str) {
    const seperated = str.split("");
    const finalArr = [];
    
    for(let i=0; i<seperated.length; i++){
        let x = new Array();
        x.push(seperated[i]);
        if(seperated[i] === "G"){
            x.push("C");
        }else if(seperated[i] === "C"){
            x.push("G");
        }else if(seperated[i] === "A"){
            x.push("T");
        }else if(seperated[i] === "T"){
            x.push("A");
        }
        finalArr.push(x);    
    }
    return finalArr;
  }
  
pairElement("GCG");

