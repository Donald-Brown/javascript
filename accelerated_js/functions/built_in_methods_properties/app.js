function message(message){
    console.log(message);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(...arguments);
    console.log(arguments.length);
}

message('Helllo', 20)