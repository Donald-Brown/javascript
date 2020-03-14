for(let i=0; i<5; i++){
    if(i == 1){
        console.log(i);
    }
}

for(let i=0; i<5; i++){
    for(let j=0; j<2; j++){
        if(i == 1){
            break;
        }
        console.log('I\'m inside the inner loop');
    }
    console.log(i);
}