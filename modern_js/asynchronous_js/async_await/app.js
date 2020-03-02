/*
async function myFunc(){

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 1000);
    });

    const res = await promise; // wait until promise is resolved

    return res;
}

myFunc().then(res => console.log(res));
*/

/////////////////////////////////////////////////
// Better example using fetch api

async function getUsers(){
    // await response to fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // only proceede once it is resolved
    const data = await response.json();

    // prodeede once second promise resoved
    return data
}

getUsers().then(users => console.log(users));