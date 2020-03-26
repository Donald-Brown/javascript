let arr = [1,2,3];
arr[Symbol.iterator] = function(){
    let nextVal = 10;
    return {
        next: function(){
            nextVal++;
            return{
                done: nextVal > 15 ? true : false,
                value: nextVal
            };
        }
    };
}

for(const cur of arr){
    console.log(cur);
}
