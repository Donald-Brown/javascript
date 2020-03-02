const user = {
    email: 'jdoe@gmail.com'
};

try {
  // Produce a reference error
  //myFuncion();

  //Produce a TypeError
  //null.myFunction();

  // Will produce SyntaxError
  //eval('hello');


  // URI error
  //decodeURIComponent('%');

  if(!user.name){
      //throw 'user has no name';
      throw new SyntaxError('User has not a name');
  }

}catch(err){
    console.log(err);
    //console.log(err.message);
    //console.log(err.name);
    //console.log(err instanceof ReferenceError);
    //console.log(err instanceof TypeError);
}finally{
    console.log('Finally runs regardless of result...');
}

console.log('Program continues...');
console.log(user.email);