function uniteUnique(args) {
  
  let array = [...arguments];
  let newArr = [];

  for(let i=0; i<array.length; i++){
    for(let j=0; j<array[i].length; j++){
      if(!newArr.includes(array[i][j])){
        newArr.push(array[i][j]);
      }
    }
  }   
  return newArr;
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));